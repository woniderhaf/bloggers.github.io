import React, {Component, useEffect, useState } from 'react'
import './Slider.css'
import Posts from '../Posts/Posts';
class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            postData: [],
            counter: 0,
            activeSlider: 1
        };
        this.buttonNext = this.buttonNext.bind(this)
        this.buttonPrev = this.buttonPrev.bind(this)
        this.number = 0
        this.clickSlider = this.clickSlider.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded : true,
                    data : result
                });
            },
            error => {
                this.setState({
                    isLoaded : true,
                    error
                })
            }
        )
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(result =>  {
            this.setState({
                postData: result
            })
        } )
    }


    buttonPrev() {
        if (this.number < 0) {
            this.number = this.number + 1
            this.setState({
                counter: this.number
            })
        }
    }

    buttonNext() {
        if(this.number > -6) {
            this.number = this.number - 1
            this.setState({
                counter: this.number
            })
        }
    }
    clickSlider(id) {
        this.setState({
            activeSlider: id
        })

    }

    render() {
        const { data, isLoaded, error, counter, activeSlider} = this.state;
        if (error) {
            return  <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return  <p>Loading</p>
        } else {
            return (
                <div className="main">
                    <div className="sliders">
                        <div className="slider__buttons">
                            <button onClick={this.buttonPrev} className="prev">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 0C17.6348 0 11.5303 2.52856 7.02944 7.02944C2.52856 11.5303 0 17.6348 0 24C0 30.3652 2.52856 36.4697 7.02944 40.9706C11.5303 45.4714 17.6348 48 24 48C30.3652 48 36.4697 45.4714 40.9706 40.9706C45.4714 36.4697 48 30.3652 48 24C48 17.6348 45.4714 11.5303 40.9706 7.02944C36.4697 2.52856 30.3652 0 24 0V0ZM34.5 22.5C34.8978 22.5 35.2794 22.658 35.5607 22.9393C35.842 23.2206 36 23.6022 36 24C36 24.3978 35.842 24.7794 35.5607 25.0607C35.2794 25.342 34.8978 25.5 34.5 25.5H17.121L23.562 31.938C23.7015 32.0775 23.8121 32.243 23.8876 32.4252C23.963 32.6075 24.0019 32.8028 24.0019 33C24.0019 33.1972 23.963 33.3925 23.8876 33.5748C23.8121 33.757 23.7015 33.9225 23.562 34.062C23.4225 34.2015 23.257 34.3121 23.0748 34.3876C22.8925 34.463 22.6972 34.5019 22.5 34.5019C22.3028 34.5019 22.1075 34.463 21.9252 34.3876C21.743 34.3121 21.5775 34.2015 21.438 34.062L12.438 25.062C12.2983 24.9227 12.1875 24.7571 12.1119 24.5749C12.0362 24.3927 11.9973 24.1973 11.9973 24C11.9973 23.8027 12.0362 23.6073 12.1119 23.4251C12.1875 23.2429 12.2983 23.0773 12.438 22.938L21.438 13.938C21.7197 13.6563 22.1017 13.4981 22.5 13.4981C22.8983 13.4981 23.2803 13.6563 23.562 13.938C23.8437 14.2197 24.0019 14.6017 24.0019 15C24.0019 15.3983 23.8437 15.7803 23.562 16.062L17.121 22.5H34.5Z" fill="#FE8700"/>
                                </svg>
                            </button>
                            <button onClick={this.buttonNext} className="next">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 0C30.3652 0 36.4697 2.52856 40.9706 7.02944C45.4714 11.5303 48 17.6348 48 24C48 30.3652 45.4714 36.4697 40.9706 40.9706C36.4697 45.4714 30.3652 48 24 48C17.6348 48 11.5303 45.4714 7.02944 40.9706C2.52856 36.4697 0 30.3652 0 24C0 17.6348 2.52856 11.5303 7.02944 7.02944C11.5303 2.52856 17.6348 0 24 0ZM13.5 22.5C13.1022 22.5 12.7206 22.658 12.4393 22.9393C12.158 23.2206 12 23.6022 12 24C12 24.3978 12.158 24.7794 12.4393 25.0607C12.7206 25.342 13.1022 25.5 13.5 25.5H30.879L24.438 31.938C24.2985 32.0775 24.1879 32.243 24.1124 32.4252C24.037 32.6075 23.9981 32.8028 23.9981 33C23.9981 33.1972 24.037 33.3925 24.1124 33.5748C24.1879 33.757 24.2985 33.9225 24.438 34.062C24.5775 34.2015 24.743 34.3121 24.9252 34.3876C25.1075 34.463 25.3028 34.5019 25.5 34.5019C25.6972 34.5019 25.8925 34.463 26.0748 34.3876C26.257 34.3121 26.4225 34.2015 26.562 34.062L35.562 25.062C35.7017 24.9227 35.8125 24.7571 35.8881 24.5749C35.9638 24.3927 36.0027 24.1973 36.0027 24C36.0027 23.8027 35.9638 23.6073 35.8881 23.4251C35.8125 23.2429 35.7017 23.0773 35.562 22.938L26.562 13.938C26.4225 13.7985 26.257 13.6879 26.0748 13.6124C25.8925 13.537 25.6972 13.4981 25.5 13.4981C25.3028 13.4981 25.1075 13.537 24.9252 13.6124C24.743 13.6879 24.5775 13.7985 24.438 13.938C24.2985 14.0775 24.1879 14.243 24.1124 14.4252C24.037 14.6075 23.9981 14.8028 23.9981 15C23.9981 15.1972 24.037 15.3925 24.1124 15.5748C24.1879 15.757 24.2985 15.9225 24.438 16.062L30.879 22.5H13.5Z" fill="#FE8700"/>
                                </svg>
                            </button>
                        </div>
                        <div className="slider__content">
                            <div className="slider__wrap" style={{transform: `translateX(${counter * 330}px)`}}>
                                {data.map((item, i) => (
                                    <div onClick={() => {this.clickSlider(i+1)}} className={activeSlider == i+1 ? 'slider activeSlide' : 'slider'} id={i+1}>
                                        <img className="image" src="https://i.pravatar.cc/320" alt="" />
                                        {/* <h2 className="name">{item.name}</h2> */}
                                        <h2 className="name">{item.name.length < 21 ? item.name : item.name.slice(0,19) + '...'}</h2>
                                        <div className="companyName">{item.company.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Posts state={this.state}/>
                </div>
       
            )
        }
    }
}

export default Slider;