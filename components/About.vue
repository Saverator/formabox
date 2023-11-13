<template>
    <section class="about wrapper">
        <div class="header">
            <div class="header__description">
                <h2>О компании</h2>
                <p class="big">Formabox обладает мощной производственной базой, поэтому заказ любого масштаба будет выполнен в срок</p>
                <p>Наше выгодное отличие от других производителей — широкий спектр выпускаемой продукции. Помимо упаковок и коробок разной формы и размера, Formabox производит картонные и бумажные мешки, втулки, гильзы и шпули.</p>
            </div>
            <div class="header__video">
                <a href="#!">
                    <img src="~/assets/images/about__video-preview.jpg">
                </a>
            </div>
        </div>

        <div class="features">
            <div class="feature feature_spec">
                <h3>Специалисты</h3>
                <p>для поиска упаковочных решений</p>
            </div>
            <div class="feature feature_lab">
                <h3>Лаборатория</h3>
                <p>входного сырья и готовой продукции</p>
            </div>
            <div class="feature feature_eco">
                <h3>Экологичность</h3>
                <p>Formabox производит упаковку<br/>из экологичных материалов</p>
            </div>
            <div class="feature feature_area">
                <h4>12 000 м<sup>2</sup></h4>
                <p>Площадь производственно-<br />складского комплекса</p>
            </div>
            <div class="feature feature_vol">
                <h4>12 млн<sup>2</sup></h4>
                <p>Гофрокартона и гофропродукции<br/>в месяц</p>
            </div>
            <div class="feature feature_bag">
                <h4>8 млн</h4>
                <p>Открытых и закрытых бумажных<br/>мешков в месяц</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about {
    padding-top: 0px;

    .header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 120px;

        &__description {
            max-width: 581px;

            h2 {
                margin-bottom: 16px;
            }

            p.big {
                font-size: $defaultFontSize * 2;
                line-height: 137.5%;
                margin-bottom: 24px;
            }

            p {
                font-size: $defaultFontSize * 1.125;
                line-height: 155.556%;
            }
        }

        &__video {
            border-radius: 24px;
            overflow: hidden;
            position: relative;

            &::after {
                position: absolute;
                cursor: pointer;
                @include position(50%, auto, auto, 50%);
                transform: translate(-50%, -50%);
                content: '';
                width: 64px;
                height: 64px;
                border-radius: 32px;
                background: url('~/assets/images/play-circle.svg') no-repeat center center,
                    $green;
            }
        }
    }

    .features {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 32px;
        margin-bottom: 120px;

        .feature {
            width: 458px;
            padding-left: 80px;
            background-position: top left;
            background-repeat: no-repeat;

            h3 {
                font-size: $defaultFontSize * 2;
                color: $orange;
                font-weight: 500;
                line-height: 100%;
                margin-bottom: 12px;
            }

            h4 {
                font-size: $defaultFontSize * 3.5;
                color: $orange;
                font-weight: 500;
                line-height: 100%;
                margin-bottom: 12px;

                sup {
                    font-size: $defaultFontSize * 1.8;
                    top: -20px;
                    font-weight: 600;
                }
            }

            p {
                font-size: $defaultFontSize * 1.125;
                line-height: 133.333%;
            }

            &_spec {
                background-image: url('~/assets/images/users.svg');
            }

            &_lab {
                background-image: url('~/assets/images/settings.svg');
            }

            &_eco {
                background-image: url('~/assets/images/heart.svg');
            }

            &_area {
                background-image: url('~/assets/images/codepen.svg');
            }
            &_vol {
                background-image: url('~/assets/images/layers.svg');
            }
            &_bag {
                background-image: url('~/assets/images/repeat.svg');
            }
        }
    }
}

@media screen and (max-width: 1440px) {
    .about {
        .header {
            margin-bottom: 62px;

            &__description {
                max-width: 728px;
                margin-bottom: 32px;

                p.big {
                    font-size: $defaultFontSize * 1.5;
                    line-height: 133.333%;
                    margin-bottom: 12px;
                }

                p {
                    font-size: $defaultFontSize;
                    line-height: 150%;
                }
            }

            &__video {
                margin: 0 auto;
            }
        }

        .features {
            flex-direction: column;
            height: 480px;

            .feature {
                margin-bottom: 60px;
                max-width: 379px;

                &_eco {
                    margin-bottom: 0;
                }

                &_area, &_vol {
                    margin-bottom: 30px;
                }

                &_bag {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>