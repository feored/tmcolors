export const formatting_data = [
    {
        code: '$w',
        name: 'Wide',
        description:
            'All following text will be wide. <br />Reset by using Reset Width or Reset All Styles.',
        example: "$w Example"
    },
    {
        code: '$n',
        name: 'Narrow',
        description:
            'All following text will be narrow. <br />Reset by using Reset Width or Reset All Styles.',
        example: "$n Example"
    },
    {
        code: '$m',
        name: 'Reset Width',
        description: 'Resets following text to default width.',
        example: "$w Example1 $m Example2"
    },
    {
        code: '$i',
        name: 'Italic',
        description:
            'All following text will be italic. <br />Reset by using another Italic tag, or Reset All Styles.',
        example: "$i Example1 $i Example2"
    },
    {
        code: '$t',
        name: 'Uppercase',
        description: 'All following text will be in uppercase letters. <br /> Reset by using another Uppercase tag, or Reset All Styles.',
        example: "$t Example1 $t Example2"
    },
    {
        code: '$o',
        name: 'Bold',
        description:
            'All following text will be bolded. <br />Reset by using another Bold tag, or Reset All Styles.',
        example: "$o Example1 $o Example2"
    },
    {
        code: '$s',
        name: 'Shadow',
        description: 'All following text will have a shadow. <br />Reset by using Reset All Styles. <br />Note: The shadow is not visible in TM2 as far as I can tell.',
        example: "$s Example1 $s Example2"
    },
    {
        code: '$hex',
        name: 'Color',
        description: "All following text will have the specified color. <br/>Colors use 3-digit hexadecimal code (0123456789ABCDEF), eg <code>$fff</code> for white. <br />Reset by using Reset Color or Reset All Styles.<br />Note: The game will also recognize 1 and 2 digit hex codes, i.e <code>$f</code> for red or <code>$0f</code> for green.",
        example: "$0d0 Example1 $9 Example2"
    },
    {
        code: '$g',
        name: 'Reset Color',
        description: 'Resets following text to default color.',
        example: "$0d0 Example1 $g Example2"
    },
    {
        code: '$z',
        name: 'Reset All Styles',
        description: 'Resets everything to default.',
        example: "$o$w$i$ff0 Example1 $z Example2"
    },
    {
        code: '$$',
        name: 'Insert $ symbol',
        description: 'Allows you to type a <code>$</code> without it being interpreted as a formatting tag.',
        example: "$$"
    }
];

export const formatting_unsupported = [
    {
        code: '$l[URL]text',
        name: 'External Link',
        description: 'Link to an external site. <br />The [URL] part is optional, so e.g <code>$lhttps://example.com</code> will also work.'
    },
    {
        code: "$h",
        name: "Internal Link",
        description: "Link to a manialink adress."
    },
    {
        code: "$p",
        name: "Playerscript Link",
        description: "Link to a player script returning a manialink."
    }
];
