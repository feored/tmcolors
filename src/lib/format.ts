enum Token {
    Character,
    Bold,
    Italic,
    Narrow,
    Wide,
    Shadow,
    Color,
    Invalid,
    Uppercase,
    Dollar,
    ColorReset,
    WidthReset,
    FullReset,
}

type TokenData = {
    type: Token
    value: string
}

export type TMStyle = {
    color: string,
    bold: boolean,
    italic: boolean,
    shadow: boolean,
    uppercase: boolean,
    width: "narrow" | "wide" | "normal",
}

const DEFAULT_TEXT_DETAILS: TMStyle = {
    color: "#fff",
    bold: false,
    italic: false,
    shadow: false,
    uppercase: false,
    width: "normal",
}

const MODIFIER_SYMBOL = "$"
const BASIC_MODIFIERS = ["i", "o", "s", "w", "n", "g", "m", "z", "t"]
const HEXADECIMAL = "0123456789ABCDEF"

function hex_to_rgb(hex: string) {
    if (hex[0] == "#") {
        hex = hex.slice(1);
    }
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return [r, g, b];
}

function rgb_to_hex(r: number, g: number, b: number) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function rgb_to_hex_3(r: number, g: number, b: number) {
    return "#" + [r, g, b].map((x) => Math.round(x / 17).toString(16)).join('');
}

export function hex_6_to_3(hex: string): string {
    let rgb = hex_to_rgb(hex);
    return rgb_to_hex_3(rgb[0], rgb[1], rgb[2]);
}

export function closest_color(hex: string): string {
    let rgb = hex_to_rgb(hex);
    for (let i = 0; i < 3; i++) {
        rgb[i] = (Math.round(rgb[i] / 17) * 17);
    }
    return rgb_to_hex(rgb[0], rgb[1], rgb[2]);
}


function modifier_to_token(modifier: string): Token {
    switch (modifier) {
        case "i":
            return Token.Italic
        case "o":
            return Token.Bold
        case "s":
            return Token.Shadow
        case "w":
            return Token.Wide
        case "n":
            return Token.Narrow
        case "g":
            return Token.ColorReset
        case "m":
            return Token.WidthReset
        case "z":
            return Token.FullReset
        case "t":
            return Token.Uppercase
        default:
            return Token.Invalid
    }
}

function tokenize_next(input: string): TokenData {
    if (input[0] != MODIFIER_SYMBOL) {
        return { type: Token.Character, value: input[0] }
    }
    else {
        if (input.length == 1) {
            return { type: Token.Invalid, value: input[0] }
        }
        if (input[1] == MODIFIER_SYMBOL) {
            return { type: Token.Dollar, value: MODIFIER_SYMBOL }
        }
    }
    if (input.length >= 4 && input.slice(1, 4).split("").every((char) => HEXADECIMAL.includes(char.toUpperCase()))) {
        return { type: Token.Color, value: input.slice(1, 4) }
    }

    if (BASIC_MODIFIERS.includes(input[1])) {
        return { type: modifier_to_token(input[1]), value: "" }
    }

    return { type: Token.Invalid, value: input[1] }
}

function tokenize(input: string): TokenData[] {
    let output: TokenData[] = [];
    for (let i = 0; i < input.length; i++) {
        let token = tokenize_next(input.slice(i));
        output.push(token);
        switch (token.type) {
            case Token.Character:
                break;
            case Token.Color:
                i += 3;
                break;
            default:
                i += 1;
                break
        }
    }
    return output;
}


export function tm_to_html(input: string): { style: TMStyle, text: string }[] {
    let tokens = tokenize(input);
    let output: { style: TMStyle, text: string }[] = [];
    let current_text_details = { ...DEFAULT_TEXT_DETAILS };

    let is_same_style = (a: TMStyle, b: TMStyle): boolean => {
        return a.color == b.color && a.bold == b.bold && a.italic == b.italic && a.shadow == b.shadow && a.width == b.width
    };

    for (const token of tokens) {

        if (token.type == Token.Character || token.type == Token.Invalid || token.type == Token.Dollar) {
            if (output.length == 0 || !is_same_style(output[output.length - 1].style, current_text_details)) {
                output.push({ style: { ...current_text_details }, text: token.value });
            } else {
                output[output.length - 1].text += token.value;
            }
            continue;
        }

        switch (token.type) {
            case Token.Bold:
                current_text_details.bold = !current_text_details.bold;
                break;
            case Token.Italic:
                current_text_details.italic = !current_text_details.italic;
                break;
            case Token.Uppercase:
                current_text_details.uppercase = !current_text_details.uppercase;
                break;
            case Token.Shadow:
                current_text_details.shadow = true;
                break;
            case Token.Wide:
                current_text_details.width = "wide";
                break;
            case Token.Narrow:
                current_text_details.width = "narrow";
                break;
            case Token.Color:
                current_text_details.color = "#" + token.value;
                break;
            case Token.ColorReset:
                current_text_details.color = DEFAULT_TEXT_DETAILS.color;
                break;
            case Token.WidthReset:
                current_text_details.width = DEFAULT_TEXT_DETAILS.width;
                break;
            case Token.FullReset:
                current_text_details = { ...DEFAULT_TEXT_DETAILS };
                break;
        }

    }
    return output;
}