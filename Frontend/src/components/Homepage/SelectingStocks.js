import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Draggable, { DraggableCore } from "react-draggable";
import { img01, img02, img03, img04, img05, img06 } from '@/assets/images/stock-logos';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import quoteImg from '../../assets/images/quote.png'
import Image from 'next/image'
import Slider from "react-slick";
// import { baseUrl} from '../../config/contants.js'
import axios from 'axios';
import { update_refresh_count } from '@/helpers/commonFunctions';
const baseUrl = 'https://backend.investorangel.com/api'
const assetUrl = 'https://backend.investorangel.com/static/'
// import { stocksData } from './stocksDataLogos';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <>
            <div className='rightArrow slider__arrow' onClick={onClick}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66674 8L13.3334 8" stroke="white" stroke-width="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.99999 2.66675L13.3333 8.00008L7.99999 13.3334" stroke="white" stroke-width="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
        </>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <>
            <div className='leftArrow slider__arrow' onClick={onClick}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.66674 8L13.3334 8" stroke="white" stroke-width="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99999 2.66675L13.3333 8.00008L7.99999 13.3334" stroke="white" stroke-width="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </>
    );
  }

const SelectingStocks = (props) => {

    const [stockIcons, setStockIcons] = useState([
        
        {
            id: '1',
            icon: img01,
            name: 'CHIPOTLE',
            selected: false
        },
        {
            id: '2',
            icon: img02,
            name: 'COSTCO',
            selected: false
        },
        {
            id: '3',
            icon: img03,
            name: 'DECKERS',
            selected: false
        },
        {
            id: '4',
            icon: img04,
            name: 'ELFCOSMETICS',
            selected: false
        },
        {
            id: '5',
            icon: img05,
            name: 'ELILILLY',
            selected: false
        },
        {
            id: '6',
            icon: img06,
            name: 'EXXONMOBIL',
            selected: false
        },
        {
            id: '7',
            icon: img01,
            name: 'CHIPOTLE',
            selected: false
        },
        {
            id: '8',
            icon: img02,
            name: 'COSTCO',
            selected: false
        },
        {
            id: '9',
            icon: img03,
            name: 'DECKERS',
            selected: false
        },
        {
            id: '10',
            icon: img04,
            name: 'ELFCOSMETICS',
            selected: false
        },
      
    ]);

    const [data,setData] = useState(null);
    const [allIcons,setAllIcons] = useState(null);

    useEffect(()=>{
        axios.get(`${baseUrl}/stocks`) // Replace with your API endpoint
        .then(response => {
          const groupedByCategory = response.data.reduce((grouped, item) => {
            const { category, ...dataWithoutCategory } = item;
            grouped[category] = grouped[category] || [];
            grouped[category].push(dataWithoutCategory);
            return grouped;
            }, {});
            setAllIcons(response.data);
            setData(groupedByCategory);
            console.log("groupedByCategory",groupedByCategory);
        //   setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    },[]);

    const [selectedIcons,setSelectedIcons] = useState([])

    const todoClicked = (e) => {
        // max 4 selected
        // const container = document.getElementById('slider_container');
        var circle = document.getElementById('circle_div');
        var rect = circle.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY  - rect.top;
        var distance = Math.sqrt(Math.pow(x - circle.offsetWidth / 2, 2) + Math.pow(y - circle.offsetHeight / 2, 2));

        // Check if the click is within the circle
        if (distance >= ((circle.offsetWidth / 2) - 60 ) ) {
            return        
        }
        // var circleX = circle.offsetLeft + circle.clientWidth / 2;
        // var circleY = circle.offsetTop + circle.clientHeight / 2;
        // console.log("my x,y",x,circleX,y,circleY,container)
        // var radius = circle.clientWidth / 2;
        // var distance = Math.sqrt(Math.pow(Math.abs(x - circleX), 2) + Math.pow(Math.abs(y - circleY), 2));
        // console.log("distance",distance,radius)
        // if (distance > radius) {
        //   console.log('Click within the circle!');
        //   return;
        // } 
        let targettedIcon = allIcons.filter((s)=> s.id == e.target.getAttribute("data-id"))[0];
        let existedIcon = selectedIcons.filter((s)=> s.id == targettedIcon.id);

        if(selectedIcons.length >= 25 && !existedIcon.length)
        {
            setAlertShow(true)
            // alert("Oops, we recommend just 25 selections to begin");
            return;
        }
        console.log("e.event",e,x,y);

        if (!e.target.classList.contains("selected")) {
          const selectedCount = stockIcons.filter((stockIcons) => stockIcons.selected).length;
          if (selectedCount === 4) {
            return;
          }
        }
        
        if(existedIcon && existedIcon.length)
        {
            let removedIconSet = selectedIcons.filter((s)=> s.id != existedIcon[0].id);
            setSelectedIcons((val)=>{
                return [...removedIconSet]
            })
            localStorage.setItem('stock_icons_info',JSON.stringify([...removedIconSet]));
            update_refresh_count()
        }
        else{
            localStorage.setItem('stock_icons_info',JSON.stringify([...selectedIcons,targettedIcon]));
            setSelectedIcons((val)=>{
                return [...val,targettedIcon]
            })
            update_refresh_count()

        }

        const new_all_icons = allIcons.map((icon)=>
            icon.id == e.target.getAttribute("data-id") ? {...icon,selected:!icon.selected}: icon
            );
        setAllIcons(new_all_icons);
        // console.log("setSelectedIcons",allIcons,new_all_icons)
        const groupedByCategory = new_all_icons.reduce((grouped, item) => {
            const { category, ...dataWithoutCategory } = item;
            grouped[category] = grouped[category] || [];
            grouped[category].push(dataWithoutCategory);
            return grouped;
            }, {});
        setData(groupedByCategory);
        // setStockIcons(
        //   stockIcons.map((stockIcons) =>
        //   stockIcons.id === e.target.getAttribute("data-id")
        //       ? { ...stockIcons, selected: !stockIcons.selected }
        //       : stockIcons
        //   )
        // );
      };

     

      const settings = {
        // dots: true,
        focusOnSelect: true,
      infinite: true,
      centerMode: true,
      centerPadding: "60px",
      draggable: true,
      swipeToSlide: true,
      touchThreshold: 50,
      speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 6,
              infinite: true,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
            }
          },
  
          {
            breakpoint: 1666,
            settings: {
                infinite: true,
              slidesToShow: 6,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
            }
          },
  
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: true,
            }
          },
  
          {
            breakpoint: 1266,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: true,
            }
          },
         
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
            }
          }
  
  
        ]
    };

    const search = (evt) =>{
        const searchTerm = evt.target.value.trim().toLowerCase();
        const filteredIcons = allIcons.filter((icon)=>{
            return icon.name.toLowerCase().includes(searchTerm);
        });
        const groupedByCategory = filteredIcons.reduce((grouped, item) => {
            const { category, ...dataWithoutCategory } = item;
            grouped[category] = grouped[category] || [];
            grouped[category].push(dataWithoutCategory);
            return grouped;
            }, {});
        setData(groupedByCategory);
        // console.log("searchTerm",searchTerm,allIcons,filteredIcons);

    }
const [alertShow,setAlertShow] = useState(false);

  return (
   <>
   
    <div className='section___2' id={props.id}>
        <Container>
        <SweetAlert
        show={alertShow}
        title="Error"
        text="Oops, we recommend just 25 selections to begin"
        onConfirm={() => setAlertShow(false)}
    />
           <Row>
            <Col md={6}>
                
                <div className='heading__area'> 
                    <h2 className='heading_default'>Circle of Competence</h2>
                </div>

            </Col>
            <Col md={6}>
                <div className='content__area'>
                        <Image src={quoteImg} />
                        <p>A wise investor named Warren once said to invest in companies that you know, with businesses you understand. He called this the “Circle of Competence.”  If it worked for Mr. Buffett, it can work for you. </p>
                        <p>Select the companies you know on the page below:  the ones that make the technology you use, the goods you wear or the foods you eat and drink. You get the idea. Then slide them into the circle. Have fun!</p>
                        {/* <button className='btn__sections'>Generate Report</button> */}
                </div>
            </Col>
           </Row>
        </Container>
    </div>
    <div className='section___2__child'>
        <Container fluid>
        <Row>
            <Col md={12}>
                <div className='search_bar'>
                    <button>Search</button>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"/></svg>
                    <input type='input' style={{paddingLeft:250}} placeholder='Search Stock Here' onChange={(evt)=>{search(evt)}} />
                </div>

                <div className='section__main_slider__div' id="slider_container">
                    <div className='circle_div' id="circle_div"></div>
                    <div className='main_slider__div'>
                        {data ?
                        Object.keys(data).map((key)=>{
                            return(
                             <div className='stock_slider' key={key}>
                            <h3>{key}</h3>
                            <Slider {...settings} infinite={data[key].length > 10 ? true:true}>
                        
                                {data[key] && [...data[key],(data[key].length< 7 ? data[key][3] : data[key][5])].map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <img src={assetUrl+item?.imageId}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    width={48}
                                    height={48}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>   )   
                        }) : null
                        }
                         {data ?
                        Object.keys(data).map((key)=>{
                            return(
                             <div className='stock_slider' key={key}>
                            <h3>{key}</h3>
                            <Slider {...settings} infinite={data[key].length > 10 ? true:true}>
                        
                                {data[key] && data[key].map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <img src={assetUrl+item?.imageId}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    width={48}
                                    height={48}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>   )   
                        }) : null
                        }
                       
 {/*
                       <div className='stock_slider'>
                        <h3>Things We Eat</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>
 
                        <div className='stock_slider'>
                            <h3>Popoular Tech Stocks</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                        <div className='stock_slider'>
                            <h3>World Leaders</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                        <div className='stock_slider'>
                            <h3>Popular Retail</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                        <div className='stock_slider'>
                            <h3>Riskier Investments</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                        <div className='stock_slider'>
                            <h3>Things We Use</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                       
                        <div className='stock_slider'>
                            <h3>Things We Wear</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                        <div className='stock_slider'>
                        <h3>Things We Eat</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                        <div className='stock_slider'>
                            <h3>Popoular Tech Stocks</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                        <div className='stock_slider'>
                            <h3>World Leaders</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                        <div className='stock_slider'>
                            <h3>Popular Retail</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                        <div className='stock_slider'>
                            <h3>Riskier Investments</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div>

                        <div className='stock_slider'>
                            <h3>Things We Use</h3>
                            <Slider {...settings}>
                        
                                {stockIcons && stockIcons.map((item) => (
                                                
                                    <>
                                    <div className='slider__icons'>
                                    <Image src={item?.icon}
                                    onClick={todoClicked}
                                    data-id={item.id}
                                    key={item.id}
                                    className={`todoDiv${item.selected ? " selected" : ""}`}
                                    />
                                    </div>
                                    </>
                                ))}

                            </Slider>
                        </div> */}

                    </div>
                </div>



                {/* <div className='box_div_drageable'>
                    <div className='circle_div'></div>
                    <Draggable className='dragDiv'>
                        <div className='innerDrageDiv'>
                            
                            <div className='iconss'>
                                
                                {stockIcons && stockIcons.map((item) => (
                                    
                                        <>
                                        <div className='img_div_icon'>
                                            <Image src={item?.icon}
                                            onClick={todoClicked}
                                            data-id={item.id}
                                            key={item.id}
                                            className={`todoDiv${item.selected ? " selected" : ""}`}
                                            />
                                            <span>{item?.name}</span>
                                        </div>
                                        </>
                                ))}

                            </div>
                            
                           
                        </div>
                    </Draggable>
                </div> */}
            </Col>
           </Row>
        {/* <Row>
            <Col md={12}>
                <div className='show__stockIcons'>
                <div className='heading__area'> 
                    <h4 className='heading_default'>Your Circle of Competence:</h4>
                </div>
                 <div className='iconsDiv'>
                    {selectedIcons.map((item)=>{
                        return  <>
                            <img src={assetUrl+item?.imageId}
                            key={item?.id}
                            height={80}
                            width={80}
                            className={`todoDiv${item?.selected ? " selected" : ""}`}
                            />
                        </>
                    })}
                </div>
                </div>
            </Col>
        </Row> */}
           
        </Container>
      </div>
      <div className='section___2 showCircle_stocs'>
        <Container>
        
           <Row>
            <Col md={12}>
                
                <div className='heading__area'> 
                    <h2 className='heading_default'>Circle of Competence</h2>
                </div>

                <div className='stocks_circle'>
                <div className='iconsDiv'>
                    {selectedIcons.map((item)=>{
                        return  <>
                            <img src={assetUrl+item?.imageId}
                            key={item?.id}
                            height={80}
                            width={80}
                            className={`todoDiv${item?.selected ? " selected" : ""}`}
                            />
                        </>
                    })}
                </div>
                </div>

            </Col>
           </Row>
        </Container>
    </div>
   </>
  )
}

export default SelectingStocks
