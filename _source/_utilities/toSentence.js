/* ----------------------------------------------------------------------------
returns a joined array
Liquid: {{ page.tags | toSentence }}
---------------------------------------------------------------------------- */
export default function toSentence(values) {
	return new Intl.ListFormat().format(values);
}
