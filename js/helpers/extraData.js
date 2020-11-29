import { ajax } from "./ajax.js";

export async function extraData(data) {
  let $ul_data = document.createElement("ul");
  for (let x = 0; x < data.length; x++) {
    await ajax({
      url: data[x],
      cbSuccess: (specificData) => {
        //console.log(specificData);
        let $li_data = document.createElement("li");
        $li_data.textContent = specificData.name ? specificData.name : specificData.title;
        //console.log($li_data);
        $ul_data.appendChild($li_data);
      },
    });
  }
  //console.log($ul_data);
  let temp_data = document.createElement("div");
  temp_data.appendChild($ul_data);
  let temp_data_list = temp_data.innerHTML;
  //console.log(temp_data_list);

  return temp_data_list;
}
