/* ----------------------------------------------------------------------------
returns an array without the specified item
Liquid: {{ page.tags | except: "posts" }}
---------------------------------------------------------------------------- */
export default function except(values, exclude) {
	return values.filter((value) => value !== exclude);
}
