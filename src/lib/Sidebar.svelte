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
    .logoNameCont svg {
        height: 50px;
    }
    .logoNameCont h2 {
        display: none;
    }
    .footerCont {
        display: flex;
        align-items: center;
        flex-direction: column;
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
        background-color: rgb(245, 95, 95);
        color: rgb(255, 255, 255);
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
    /*
    .headerLogoCont,
    .footerCont,
    .copy,
    ul {
        border: 2px solid black;
    }
*/
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
    }
</style>

<nav class={cols}>
    <div class="navContent row">
        <div class="headerLogoCont col-2 col-lg-12">
            <div class="logoNameCont">
                <h2>Poke Shop</h2>
                <svg
                    viewBox="0 0 48 48"
                    id="a"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g><g id="SVGRepo_iconCarrier"
                        ><defs
                            ><style>
                                .c {
                                    fill: none;
                                    stroke: #000000;
                                    stroke-linecap: round;
                                    stroke-linejoin: round;
                                }
                            </style></defs
                        ><circle id="b" class="c" cx="23.99" cy="23.99" r="8"
                        ></circle><path
                            class="c"
                            d="M2.83,27.75c1.77,10.08,10.57,17.74,21.16,17.74s19.39-7.66,21.16-17.74h-8.71c-1.61,5.35-6.58,9.24-12.45,9.24s-10.84-3.89-12.45-9.24H2.83Z"
                        ></path><path
                            class="c"
                            d="M2.82,20.25C4.59,10.16,13.4,2.49,23.99,2.49s19.4,7.67,21.17,17.76h-8.71c-1.61-5.36-6.58-9.26-12.46-9.26s-10.85,3.9-12.46,9.26H2.82Z"
                        ></path></g
                    ></svg
                >
            </div>

            <hr />
        </div>

        <ul class="col-7 col-lg-12">
            <a href="/informes"><li>Informe</li></a>
            <a href="/inventario"><li>Inventario</li></a>
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
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g><g id="SVGRepo_iconCarrier">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                            fill="#724a18"
                        ></path>
                        <path
                            d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                            fill="#724a18"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                            fill="#724a18"
                        ></path>
                    </g></svg
                >
            </div>
        </div>
        <div class="copy col-12">
            <p>© Derechos reservados PokeShop</p>
        </div>
    </div>
</nav>
