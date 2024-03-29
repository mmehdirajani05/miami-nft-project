import React from 'react'
import Image from 'next/image'
import styles from './slider.module.scss'
import Slider from "react-slick";
import { IconButton, Menu, MenuItem } from '@material-ui/core'

const ImageDescSlider = ({items, title}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const sliderRefAvatars = React.createRef(null);
    const sliderRefAppartments = React.createRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            }
        ]
    };

    
    const onNextClick = () => {
        sliderRefAvatars.current.slickNext();
    }
    const onPreviousClick = () => {
        sliderRefAvatars.current.slickPrev();
    }

    const onNextClickAppartment = () => {
        sliderRefAppartments.current.slickNext();
    }

    const onPreviousClickAppartment = () => {
        sliderRefAppartments.current.slickPrev();
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className='container py-4'>
                <div className='avatars my-5'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='main-heading'>{title}</div>
                        <div className='d-flex align-items-center'>
                            <IconButton onClick={onPreviousClick} size="small">
                                <span className={`${styles.carousel_icon} material-icons-round icon`}>
                                    chevron_left
                                </span>
                            </IconButton>
                            <IconButton onClick={onNextClick} size="small">
                                <span className={`${styles.carousel_icon} material-icons-round icon`}>
                                    chevron_right
                                </span>
                            </IconButton>
                        </div>
                    </div>
                    <Slider ref={sliderRefAvatars} {...settings}>
                        {items && items.length && items.map((avatar, index) => {
                            return (
                                <>

                                    <div key={index} className={styles.avatar_wrapper}>
                                        <Image src={avatar.imgUrl} alt="" className={styles.avatar_img} />
                                        <div className={styles.avatar_details}>
                                            <div className={styles.avatar_name}>{avatar.name}</div>
                                            <div>{avatar.status}</div>
                                            <div>{avatar.title}</div>
                                        </div>
                                    </div>

                                    {/* <IconButton
                                    className={styles.menu_btn}
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <span className={`${styles.card_icon} material-icons-outlined`}>
                                            more_vert
                                        </span>
                                    </IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu> */}
                                </>
                            )
                        })
                        }
                    </Slider>
                </div>
            </div>
        </>

    )
}

export default ImageDescSlider