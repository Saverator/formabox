<template>
    <div class="carousel">
        <img :src="currentSlide" class="carousel__picture">

        <div class="carousel__top-shadow"></div>
        <carouselSpot1 class="carousel__spot carousel__spot1" />
        <carouselSpot2 class="carousel__spot carousel__spot2" />
        <carouselSpot3 class="carousel__spot carousel__spot3" />

        <div class="wrapper carousel__wrapper">
            <Header
                class="header"
            />

            <div class="carousel__description">
                <p>{{ currentDescription }}</p>
                <a :href="currentLink">Подробнее</a>
            </div>

            <div class="carousel__navigation">
                <a href="#!" class="nav-btn nav-btn_left"></a>
                <a href="#!" class="nav-btn nav-btn_right">
                    <div class="nav-progress"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import carouselSpot1 from '~/assets/images/carousel__spot1.svg'
import carouselSpot2 from '~/assets/images/carousel__spot2.svg'
import carouselSpot3 from '~/assets/images/carousel__spot3.svg'
</script>

<script>
export default {
    props: {
        slides: [Array],
        descriptions: [Array],
        links: [Array]
    },
    data() {
        return {
            currentSlide: this.slides[0],
            currentDescription: this.descriptions[0],
            currentLink: this.links[0]
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel {
    position: relative;
    overflow: hidden;
    height: 808px;

    &__picture {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &__top-shadow {
        position: absolute;
        @include position();
        width: 100%;
        height: 332px;
        background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
    }

    &__spot {
        position: absolute;
    }
    &__spot1 {
        top: 0;
        left: 0;
        width: 1361px;
        height: 1015px;
    }
    &__spot2 {
        top: 0;
        left: 0;
        width: 599px;
        height: 1100px;
    }
    &__spot3 {
        bottom: -240px;
        right: 0;
        width: 1030px;
        height: 680px;
    }

    &__wrapper {
        position: absolute;
        @include position();
    }

    &__description {
        position: absolute;
        @include position(auto, auto, 80px, 0);
        width: 518px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        p {
            color: $white;
            font-size: $defaultFontSize * 2;
            font-weight: 500;
            line-height: 125%;
            margin-bottom: 40px;
        }

        a {
            display: block;
            padding: 16px 66px 16px 40px;
            background: url('~/assets/images/arrow-right.svg') no-repeat center right 40px,
                $green;
            border-radius: 100px;
            color: $white;
            font-weight: 500;
            text-decoration: none;
            transition: $animation-time all ease-in;

            &:hover {
                background-position: center right 30px;
                transition: $animation-time all ease-out;
            }
        }
    }

    &__navigation {
        position: absolute;
        @include position(auto, 0, 80px, auto);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 24px;

        .nav-btn {
            position: relative;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.24);
            background: url('~/assets/images/chevron.svg') no-repeat center center;
            transition: all ease $animation-time;

            &:hover {
                background-position: center left 10px;
                transition: all ease $animation-time;
            }

            &_right {
                transform: scaleX(-1);
            }

            .nav-progress {
                position: absolute;
                @include position();
                width: 66px;
                height: 66px;
                border: 3px solid $white;
                border-radius: 50%;
                transform: translate(-2px, -2px);
                animation: progress 10s linear;
            }
        }
    }
}

@keyframes progress {
    0% { clip-path: polygon(50% 50%, 50% -21%, 50% -21%, 50% -21%, 50% -21%, 50% -21%); }
    25% { clip-path: polygon(50% 50%, 50% -21%, -21% 50%, -21% 50%, -21% 50%, -21% 50%); }
    50% { clip-path: polygon(50% 50%, 50% -21%, -21% 50%, 50% 121%, 50% 121%, 50% 121%); }
    75% { clip-path: polygon(50% 50%, 50% -21%, -21% 50%, 50% 121%, 121% 50%, 121% 50%); }
    100% { clip-path: polygon(50% 50%, 50% -21%, -21% 50%, 50% 121%, 121% 50%, 50% -21%); }
}

.header {
    position: absolute;
    @include position(20px);
}

@media screen and (max-width: 960px) {
    .carousel {
        &__description {
            p {
                font-size: $defaultFontSize * 1.75;
            }
        }
    }
}
</style>