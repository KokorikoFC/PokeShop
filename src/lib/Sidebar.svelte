<script>
    export let cols = "";
</script>

<style>
    p {
        margin-bottom: 0;
    }
    nav {
        position: fixed;
        bottom: 0;
        padding: 20px;
        background-color: #fde379;
        z-index: 3;
    }
    nav hr {
        width: 100%;
        border: 3px solid #724a18;
        border-radius: 100px;
        opacity: 1;
        display: none;
    }
    .navContent {
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .headerLogoCont {
        text-align: center;
    }
    .logoNameCont {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .logoNameCont img {
        height: 50px;
    }
    .logoNameCont h2 {
        display: none;
    }
    .footerCont {
        display: none;
    }
    .footerMediaCont {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }
    .footerMediaCont svg {
        width: 30%;
    }

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        margin-bottom: 0;
        width: 80%;
    }

    a {
        text-decoration: none;
        color: #724a18;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a:hover {
        background-color: #483011;
        color: rgb(255, 255, 255);
        transition: all 0.3s ease;
    }
    .footerMediaCont svg {
        height: 40px;
    }
    .copy {
        height: auto;
        display: flex;
        justify-content: center;
        align-items: end;
        font-size: 12px;
    }
    svg:hover {
        cursor: pointer;
        fill: #483011;
        transition: all 0.3s ease;
        transform: scale(1.05);
        transform: rotate(10deg);
    }
    @media (min-width: 992px) {
        nav {
            height: 100vh;
        }
        nav hr {
            display: block;
        }
        .headerLogoCont {
            height: 20%;
        }
        .logoNameCont h2 {
            font-size: 26px;
            font-weight: bold;
            display: block;
        }

        ul {
            height: 60%;
            flex-direction: column;
            justify-content: center;
            font-size: 24px;
            gap: 80px;
            width: 100%;
        }
        a {
            background-color: #724a18;
            width: 85%;
            padding: 5px;
            text-align: center;
            border-radius: 50%;
            color: rgb(255, 255, 255);
            font-size: 22px;
        }
        .footerCont {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    }
</style>

<nav class={cols}>
    <div class="navContent row">
        <div class="headerLogoCont col-2 col-lg-12">
            <div class="logoNameCont">
                <h2>PokeShop</h2>
                <img src="public/img/pokeball.png" alt="">
            </div>

            <hr />
        </div>

        <ul class="col-7 col-lg-12">
            <a href="/informes"><li>Informe</li></a>
            <a href="/inventario"><li>Inventario</li></a>
            <a href="/clientes"><li>Clientes</li></a>
        </ul>

        <div class="footerCont col-3 col-lg-12">
            <hr />
            <div class="footerMediaCont">
                <svg
                    fill="#724a18"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-267 288.9 264.5 225.1"
                    xml:space="preserve"
                    ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g><g id="SVGRepo_iconCarrier">
                        <g>
                            <path
                                d="M-21.8,354.4c-0.8-0.9-1.3-2.3-1.2-3.5c0.9-20.1-1.8-39.6-8.6-58.6c-0.9-2.4-2-3.3-4.5-2.6c-5.6,1.7-11.4,3-16.9,5 c-15.2,5.5-29.1,13.5-42.6,22.2c-1.4,0.9-3.5,1.5-5.2,1.2c-22.1-3.9-44.3-3.7-66.5-0.3c-2.2,0.3-5-0.2-6.8-1.3 c-15.7-10.2-31.7-20.2-50-25c-15.1-4-12-4.8-16.3,8.9c-5.1,16.4-7.1,33.4-6,50.6c0.1,1.2-0.8,2.7-1.6,3.8 c-6.6,7.9-11.7,16.6-14.8,26.4c-6,19-4.8,38.2-1,57.3c7.5,37.5,32.8,63.8,70.2,70.3c19.3,3.4,39.2,3.7,57.3,5.2 c20.2-1.5,38.9-1.6,57.1-4.5c31.8-5.1,55.8-22,67.8-52.7c4.2-10.7,6.5-22.4,7.9-33.8C-0.3,397.9-4.6,374.3-21.8,354.4z M-39.5,458.8c-3.3,15.6-12.4,26.3-27.6,31.8c-14.7,5.4-29.9,7.6-45.4,8.6c-7.5,0.5-15,0.1-22.5,0.1c-20.2,0.4-40.4-0.4-59.9-6.2 c-24.5-7.3-35.5-21.9-36.2-47.5c-0.3-9.1,0.7-17.9,5-26.1c8.5-16.5,23.2-22.3,40.6-22.6c9.5-0.1,19.1,0.7,28.7,1.6 c20.1,1.8,40-0.1,60-1.2c8.8-0.5,17.8-0.7,26.4,0.8c18.5,3.2,32.5,21.6,32.8,42.3C-37.6,446.5-38.3,452.8-39.5,458.8z"
                            ></path>
                            <path
                                d="M-191.5,424.5c-5.5,5.7-7.4,12.9-7.7,19.3c0,9.6,2.8,17.3,7.7,22.3c6.8,6.9,16.1,6.7,22.6-0.3c9.8-10.6,9.7-30.5,0-41 C-175.4,417.7-184.9,417.6-191.5,424.5z"
                            ></path>
                            <path
                                d="M-99.4,423.7c-11.2,10.3-11.2,33,0,43.2c6.5,5.9,15.3,5.6,21.4-0.7c5.6-5.8,7.6-13.1,7.8-21c-0.2-7.9-2.2-15.1-7.9-20.9 C-84.2,418-93,417.8-99.4,423.7z"
                            ></path>
                        </g>
                    </g></svg
                >

                <svg
                    fill="#724a18"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Shopicons"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 48 48"
                    xml:space="preserve"
                    ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g><g id="SVGRepo_iconCarrier">
                        <style type="text/css">
                            .st0 {
                                fill: none;
                            }
                        </style>
                        <g>
                            <path class="st0" d="M0,0h48v48H0V0z"></path>
                            <path
                                d="M36,4H12c-4.4,0-8,3.6-8,8v24c0,4.4,3.6,8,8,8h24c4.4,0,8-3.6,8-8V12C44,7.6,40.4,4,36,4z M24,34c-5.5,0-10-4.5-10-10 s4.5-10,10-10s10,4.5,10,10S29.5,34,24,34z M35,15c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C37,14.1,36.1,15,35,15z"
                            ></path>
                        </g>
                    </g></svg
                >
            </div>
        </div>
        <div class="copy col-12">
            <p>© Derechos reservados PokeShop</p>
        </div>
    </div>
</nav>
