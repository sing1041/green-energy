// DATA RESOURCES
let dataResorce = [
    {
        heading: "Green Energy",
        bodyText: "Suspendisse potenti. Aliquam non placerat ex, eget malesuada mi. Nullam iaculis sit amet orci aliquam faucibus. Donec sollicitudin lorem sit amet scelerisque mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam porta, mi ac suscipit mollis, odio sapien volutpat est, ac suscipit sem velit nec nulla. Sed semper et purus nec vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse tellus erat, tempus id iaculis sed, aliquam in mi. Maecenas felis justo, efficitur faucibus augue ut, ultricies cursus nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus blandit nec nibh sed aliquam. Ut faucibus ultrices aliquet. Aenean at dapibus mi.",
        imgUrl: "img/green_bulb.jpg"
    },
    {
        heading: "Wind Energy",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in semper massa, sed blandit ante. Etiam orci orci, tristique sodales mauris eu, bibendum hendrerit ante. Nulla ornare iaculis felis, at malesuada est sodales sit amet. Etiam eget enim diam. Suspendisse vitae massa volutpat, pretium nisl sit amet, varius diam. Donec pretium justo eu placerat fermentum. Aliquam non rhoncus nulla. Praesent sem ex, egestas vel tellus sit amet, ultrices fringilla nulla. Cras vitae porttitor diam. Pellentesque finibus molestie urna, quis tincidunt mauris imperdiet at. Vivamus iaculis a.",
        imgUrl: "img/wind_energy.jpg"
    },
    {
        heading: "Solar Energy",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in semper massa, sed blandit ante. Etiam orci orci, tristique sodales mauris eu, bibendum hendrerit ante. Nulla ornare iaculis felis, at malesuada est sodales sit amet. Etiam eget enim diam. Suspendisse vitae massa volutpat, pretium nisl sit amet, varius diam. Donec pretium justo eu placerat fermentum. Aliquam non rhoncus nulla. Praesent sem ex, egestas vel tellus sit amet, ultrices fringilla nulla. Cras vitae porttitor diam. Pellentesque finibus molestie urna, quis tincidunt mauris imperdiet at. Vivamus iaculis .",
        imgUrl: "img/solar_energy.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev){
    
    // fetch the clicked button
    let clickedBtn = ev.target;
    
    // read the text inside the button
    let btnText = clickedBtn.innerText;
    
    // print the text of the clicked button
    //console.log(btnText);
    
    if (btnText === "Green Energy") {
        $content.innerHTML =`<div class="row">
                                <div class="col col-12 col-md-6 col-lg-6 product">
                                  <figure style="background:url('${dataResorce[0].imgUrl}')"></figure>
                                  <h2>${dataResorce[0].heading}</h2>
                                  <p>${dataResorce[0].bodyText}</p>
                                </div>
                            </div>`;
    } else if (btnText === "Wind Energy") {
          $content.innerHTML = `<div class="row wind_energy ">
                                    <div class="col col-md-8 col-lg-6 product">
                                      <figure style="background:url('${dataResorce[1].imgUrl}')"></figure>
                                    </div>
                                    <div class="col col-md-4 col-lg-6">
                                        <h2>${dataResorce[1].heading}</h2>
                                        <p>${dataResorce[1].bodyText}</p>
                                    </div>
                               </div>`;
    } else {
          $content.innerHTML = `<div class="row solar_energy">
                                    <div class="col col-md-4 col-lg-6">
                                        <h3>${dataResorce[2].heading}</h3>
                                        <p>${dataResorce[2].bodyText}</p>
                                    </div>
                                    <div class="col col-md-8 col-lg-6 product">
                                      <figure style="background:url('${dataResorce[2].imgUrl}')"></figure>
                                    </div>
                                </div>`;

    }
    
}
//$btns[0].addEventListener("click", clickEvent);
//$btns[1].addEventListener("click", clickEvent);
//$btns[2].addEventListener("click", clickEvent);

for(let i=0; i<$btns.length; i++){
    $btns[i].addEventListener("click", eventHandler);
}