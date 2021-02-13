module.exports = function (objects) {
  // Note that if you alter this function while running a dev server, you have to restart it to see your changes.
  let objects_with_a_colors_property = objects.filter((item) => {
    return "colors" in item.data;
  });
  let current_colors = [
    ...new Set(
      objects_with_a_colors_property
        .map((item) => {
          return item.data.colors;
        })
        .flat()
    ),
  ];
  let objects_by_color = [];
  for (color of current_colors) {
    let objects_for_color = objects_with_a_colors_property.filter((item) => {
      return item.data.colors?.includes(color);
    });
    if (!!objects_for_color) {
      objects_by_color.push({ color, objects: objects_for_color });
    }
  }
  const clean_up_item = ({ data }) => {
    const unwanted = ["pkg", "eleventyComputed", "collections", "documentData"];
    const {pkg, eleventyComputed, collections, documentData, ...remainingData} = data;
    const return_me = JSON.parse(JSON.stringify({data: remainingData}));
    return {return_me};
  };
  for (colorblock of objects_by_color) {
    colorblock.objects = colorblock.objects.map((item) => {
      return clean_up_item(item);
    });
  }
  return objects_by_color;
};