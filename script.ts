
$(document).ready(() => {


  $('#add_img').click(() => {

  })

  $('#get_img').click(() => {
    $.getJSON(('api.php/image'), (data: any) => {
      let items: Array<string> = [];
      $.each(data, (key: string, val: string)=>{
        this.items.push("<p>Key: "+key+"</p>"+val)
      });
      $('#answer').val(items.join('</br>'));
    });
  });

  $('#delete_img').click(() => {

  })

});
