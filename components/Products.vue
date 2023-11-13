<template>
    <section class="products wrapper">
        <h2>Продукция</h2>
        <p>В ассортимент нашей продукции входят разные профили
            <br />гофрокартона в зависимости от количества слоев</p>

        <div class="products-list">
            <a href="#!" class="product product_mgk1">
                <h3>Микрогофрокартон</h3>
                <p>Оптимальный материал для производства коробок, который отличается экологич-ностью, небольшим весом и много-функциональностью.</p>
                <p>Примечательно, что при изготовлении гофрокартона можно использовать бумагу и картон из макулатуры.</p>
            </a>
            <a href="#!" class="product product_mgk2">
                <h3>Микрогофрокартон</h3>
                <p>Микрогофрокартон подходит для изготовления упаковки небольших размеров под хрупкий или компактный товар. Тем не менее микрогофрокартон может использоваться и для коробок под более габаритную продукцию</p>
            </a>
            <a href="#!" class="product product_gk3">
                <h3>Трехслойный гофрокартон</h3>
                <p>Состоит из двух плоских слоев (лайнер) и одного гофрированного слоя (флютинг)</p>
            </a>
            <a href="#!" class="product product_gk5">
                <h3>Пятислойный гофрокартон</h3>
                <p>Состоит из трех плоских (лайнер) и двух гофрированных (флютинг) слоев</p>
            </a>
            <a href="#!" class="product product_korob4">
                <h3>Короб 4-х клапанный</h3>
                <p>Микрогофрокартон подходит для изготовления упаковки небольших размеров под хрупкий или компактный товар. Тем не менее микрогофрокартон может использоваться и для коробок под более габаритную продукцию</p>
            </a>
            <a href="#!" class="product product_ugk">
                <h3>Упаковка из гофрокартона</h3>
                <p>Оптимальный материал для производства коробок, который отличается экологич-ностью, небольшим весом и много-функциональностью.</p>
                <p>Примечательно, что при изготовлении гофрокартона можно использовать бумагу и картон из макулатуры: это позволяет снизить нагрузку на окружающую среду и экономить материалы для сырья.</p>
            </a>
            <a href="#!" class="product product_korobh">
                <h3>Короб сложной высечки</h3>
                <p>Упаковка сложной конфигурации с дополнительными отверстиями, ручками и элементами</p>
            </a>
            <a href="#!" class="product product_grs">
                <h3>Гофрорешетка в сборе</h3>
                <p>Ряд ячеек, образованных поперечными и продольными планками из гофрокартона</p>
            </a>
            <a href="#!" class="product product_fefco">
                <h3>Каталог FEFCO</h3>
                <p>Каталог разработан как формальная система для упрощения сложных словесных описаний коробок и упаковочных конструкций</p>
            </a>
            <a href="#!" class="product product_paper">
                <h3>Бумажные мешки</h3>
                <p>Упаковка сложной конфигурации с дополнительными отверстиями, ручками и элементами</p>
            </a>
            <a href="#!" class="product product_kg">
                <h3>Картонные гильзы</h3>
                <p>Втулки выпускаются в несколько слоев. Количество бумажных слоёв может быть от 3 до 25</p>
            </a>
            <a href="#!" class="product product_poly">
                <h3>Полиэтилен</h3>
                <p>Помимо прямого использования плёнка из полиэтилена высокого давления (ПВД) является универсальным материалом для изготовления различной упаковки</p>
            </a>
            <a href="#!" class="product product_vup">
                <h3>Вспомогательные<br />упаковочные материалы</h3>
                <p>Материалы для упаковывания — материалы, предназначенные для обеспечения целостности различных изделий при их хранении или перевозке</p>
            </a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.products {
    h2 {
        margin-bottom: 12px;
    }

    &>p {
        font-size: $defaultFontSize * 1.5;
        line-height: 133.333%;
        margin-bottom: 40px;
    }

    &-list {
        display: grid;
        gap: 32px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: "mgk1 mgk1 mgk2 mgk2"
                            "gk3 gk5 korob4 korob4"
                            "ugk ugk korobh grs"
                            "fefco fefco paper kg"
                            "poly poly vup vup";

        .product {
            display: block;
            position: relative;
            padding: 32px;
            background-color: $elephant-bone;
            background-repeat: no-repeat;
            background-position: bottom right;
            border-radius: 24px;
            height: 400px;
            text-decoration: none;

            &::after {
                position: absolute;
                @include position(auto, auto, 32px, 32px);
                content: '';
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: url('~/assets/images/arrow-right.svg') no-repeat center center, $green;
                background-size: 24px 24px;
                opacity: 0;
                transition: $animation-time all ease-in-out;
            }

            &:hover::after {
                opacity: 1;
                transition: $animation-time all ease-in-out;
            }

            h3 {
                font-size: $defaultFontSize * 1.5;
                font-weight: 500;
                line-height: 133.333%;
                margin-bottom: 8px;
                color: $black;
            }

            p {
                margin-bottom: 1em;
                color: $brown;
                max-width: 340px;
            }

            &_mgk1 {
                background-image: url('~/assets/images/mgk1.webp');
                grid-area: mgk1;
            }
            &_mgk2 {
                background-image: url('~/assets/images/mgk2.webp');
                grid-area: mgk2;
                background-position: center right 67px;
            }
            &_gk3 {
                background-image: url('~/assets/images/gk3.webp');
                grid-area: gk3;
                background-position: bottom center;
            }
            &_gk5 {
                background-image: url('~/assets/images/gk5.webp');
                grid-area: gk5;
                background-position: bottom center;
            }
            &_korob4 {
                background-image: url('~/assets/images/korob4.webp');
                grid-area: korob4;
            }
            &_ugk {
                background-image: url('~/assets/images/ugk.webp');
                grid-area: ugk;
                background-position: bottom 27px right;
            }
            &_korobh {
                background-image: url('~/assets/images/korobh.webp');
                grid-area: korobh;
                background-position: bottom center;
            }
            &_grs {
                background-image: url('~/assets/images/grs.webp');
                grid-area: grs;
                background-position: bottom center;
            }
            &_fefco {
                background-image: url('~/assets/images/fefco.webp');
                grid-area: fefco;
            }
            &_paper {
                background-image: url('~/assets/images/paper.webp');
                grid-area: paper;
                background-position: bottom center;
            }
            &_kg {
                background-image: url('~/assets/images/kg.webp');
                grid-area: kg;
                background-position: bottom center;
            }
            &_poly {
                background-image: url('~/assets/images/poly.webp');
                grid-area: poly;
                background-position: bottom 14px right 31px;
            }
            &_vup {
                background-image: url('~/assets/images/vup.webp');
                grid-area: vup;
                background-position: bottom 76px right;
            }
        }
    }
}

@media screen and (max-width: 1440px) {
    .products {
        h2 {
            margin-bottom: 16px;
        }

        &>p {
            font-size: $defaultFontSize * 1.25;
            line-height: 140%;
            margin-bottom: 23px;
        }

        &-list {
            display: grid;
            column-gap: 32px;
            row-gap: 42px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas: "mgk1 mgk1"
                                "mgk2 mgk2"
                                "gk3 gk5"
                                "korob4 korob4"
                                "ugk ugk"
                                "korobh grs"
                                "fefco fefco"
                                "paper kg"
                                "poly poly"
                                "vup vup";

            .product {
                height: 320px;
            }
        }
    }
}
</style>