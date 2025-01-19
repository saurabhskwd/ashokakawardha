'use client';
import React from "react";
import Slider from "react-slick";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      <div className="h-lvh overflow-hidden">
        <img src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/472209466_1352848989419859_5696856869831568655_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=c9OTmNxIISUQ7kNvgE46TXA&_nc_zt=23&_nc_ht=scontent-bom1-1.xx&_nc_gid=A7u_RazwBcYobHybpRp3zu2&oh=00_AYDUDfNXB_f70Ya_e-1jU8I92T0f6vTj6NcIZO1EvM-J8Q&oe=6792D1A9" alt="1" />
      </div>
      <div className="h-lvh overflow-hidden">
        <img src="https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/472211672_1352848869419871_8314679620430606434_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8jXKIkLtBTgQ7kNvgHghVNQ&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=AYkTtXTtKVFZjkrKZuxJOx5&oh=00_AYBUeLYy0VQs_WZTkYzsW8FFI6OCWTHYmahjF3GAOnxLhw&oe=6792BE24" alt="2" />
      </div>
      <div className="h-lvh overflow-hidden">
        <img src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/472209268_1352847036086721_9087250389765333435_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gQeJWtx3joIQ7kNvgGw0uMc&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=Ay91r4nJxHDna5126lDBY7E&oh=00_AYCHqleKevm5fIK28UE6Kwo82-B4TqptldmSDfzbAKWakQ&oe=6792C5AA" alt="3" />
      </div><div className="h-lvh overflow-hidden">
        <img src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/471634918_1352843146087110_994133595729032196_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k9lpb9lm3BcQ7kNvgFm6ICd&_nc_zt=23&_nc_ht=scontent-bom1-1.xx&_nc_gid=AqMDI1_sqt1qQU803Y_FISn&oh=00_AYAXmuQwaOwv5op661kIPSp66rKgLle0u251QETgcpdZcA&oe=6792CBF5" alt="4" />
      </div><div className="h-lvh overflow-hidden">
        <img src="https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/472293466_1352849109419847_5176827776857980115_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EY_GnvQhBt0Q7kNvgFNOHed&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=Ah5mzX98roOcUyUQ2EEKWSI&oh=00_AYCFDk4fWl8K-dlI7kGl4DtFq6SbQqVsZ2Il8hhhzBIiyw&oe=6792C79F" alt="5" />
      </div>
      <div className="h-lvh overflow-hidden">
        <img src="https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/472210904_1352851832752908_693875741909984672_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pDLKpsyj9qwQ7kNvgHx0fA8&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=AVnYHFiYZnvS9vUzPzaWfTJ&oh=00_AYDXPGM9gb00os0ImmB34puYMqjxg6FeEGnvp-xqU1TQag&oe=6792BAF3" alt="6" />
      </div>
    </Slider>
  );
}