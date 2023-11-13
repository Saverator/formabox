<template>
    <div class="header">
        <a href="#!" class="logo"><Logo class="logo"/></a>

        <div class="header__navigation">
            <div class="navigation-links">
                <div class="navigation-links__phone">
                    <a href="tel:+74922404937">+7 (4922) 40-49-37</a>
                </div>
                <div class="navigation-links__service">
                    <a href="#!" class="message">Оставить сообщение</a>
                    <a href="#!" class="search">Поиск</a>
                </div>
                <Menu
                    @click="showMenu"
                />
            </div>

            <nav class="menu" :class="{ active: isActive }">
                <div class="menu__header">
                    <a href="#!" class="logo">
                        <Logo class="logo"/>
                    </a>

                    <div class="phone">
                        <a href="tel:+74922404937">+7 (4922) 40-49-37</a>
                    </div>

                     <CloseMenu
                        @click="hideMenu"
                     />

                     <input type="text" class="search" placeholder="Поиск">
                </div>

                <ul>
                    <li v-for="item of menu">
                        <a :href="item.link">{{ item.title }}</a>
                    </li>
                    <li>
                        <a href="#!"><Message />Оставить сообщение</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
import Logo from '~/assets/images/logo.svg'
import Menu from '~/assets/images/menu.svg'
import CloseMenu from '~/assets/images/close-menu.svg'
import Message from '~/assets/images/message-square.svg'
</script>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: 'О нас',
                    link: '#!'
                },
                {
                    title: 'Продукция',
                    link: '#!'
                },
                {
                    title: 'Услуги',
                    link: '#!'
                },
                {
                    title: 'Новости',
                    link: '#!'
                },
                {
                    title: 'Вакансии',
                    link: '#!'
                },
                {
                    title: 'Контакты',
                    link: '#!'
                }
            ],
            isActive: false
        }
    },
    methods: {
        showMenu() {
            this.isActive = true
        },
        hideMenu() {
            this.isActive = false
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    color: $white;

    a {
        color: $white;
        text-decoration: none;
        line-height: 100%;
    }

    .logo {
        color: $white;

        svg {
            width: 136px;
            height: 80px;
        }
    }

    &__navigation {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        gap: 18px;

        .navigation-links {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            height: 36px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);

            &__service {
                display: flex;
                flex-wrap: nowrap;
                gap: 64px;
                opacity: .4;

                a {
                    display: inline-block;
                    padding-left: 24px;
                    background-repeat: no-repeat;
                    background-position: center left;
                }

                .message {
                    background-image: url('~/assets/images/message-square.svg');
                }

                .search {
                    background-image: url('~/assets/images/search.svg');
                }
            }

            svg {
                display: none;
            }
        }

        .menu {
            font-size: $defaultFontSize * 1.25;

            &__header {
                display: none;
            }

            ul {
                display: flex;
                flex-wrap: nowrap;
                gap: 56px;

                li {
                    &:last-child {
                        display: none;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1440px) {
    .header {
        &__navigation {
            .menu {
                font-size: $defaultFontSize;
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .header {
        .logo {
            svg {
                width: 110px;
                height: 64px;
            }
        }
    }
}

@media screen and (max-width: 960px) {
    .header {
        &__navigation {
            .navigation-links {
                border: none;

                &__service {
                    display: none;
                }

                svg {
                    display: block;
                    width: 24px;
                    height: 24px;
                    margin-left: 42px;
                    cursor: pointer;
                }
            }

            .menu {
                position: fixed;
                @include position();
                padding: 20px 32px;
                background-color: $white;
                z-index: 1000;
                transform: translateY(-100%);
                transition: $animation-time all ease-out;

                &.active {
                    transform: translateY(0);
                    transition: $animation-time all ease-in;
                }

                &__header {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: flex-start;
                    position: relative;

                    .logo {
                        display: block;
                        color: $orange;
                        width: 110px;
                    }

                    .phone {
                        font-weight: 500;
                        padding: 24px 66px 0 0;

                        a {
                            color: $black;
                        }
                    }

                    >svg {
                        position: absolute;
                        @include position(0, 0, auto, auto);
                        cursor: pointer;
                        width: 24px;
                        height: 24px;
                    }

                    .search {
                        width: 100%;
                        height: 40px;
                        padding: 12px 12px 12px 36px;
                        margin-top: 44px;
                        margin-bottom: 16px;
                        border: none;
                        border-radius: 8px;
                        background: url('~/assets/images/search1.svg') no-repeat center left 12px, $elephant-bone;

                        &::placeholder {
                            color: $smoke-grey;
                        }
                    }
                }

                ul {
                    display: flex;
                    flex-wrap: nowrap;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 0;

                    li {
                        width: 100%;
                        padding: 36px 0;
                        margin: 0;
                        border-bottom: $elephant-bone 1px solid;

                        &:last-child {
                            display: block;

                            svg {
                                width: 16px;
                                height: 16px;
                                fill: none;
                                margin-right: 8px;
                            }
                        }

                        a {
                            color: $black;
                        }
                    }
                }
            }
        }
    }
}
</style>