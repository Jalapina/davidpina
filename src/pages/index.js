import React, {useState} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../assets/index.scss"
import circleGif from "../images/circle.gif"

const IndexPage = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(previousValue => !previousValue);
    const visible = modal ? 'visible' : '';

return(    
    
  <Layout>

    <SEO title="Home" />

    <div className="container">

        <div className="home-intro-wrapper">
            <div className="svg-illustration-wrapper">
                <div className="animation-wrapper">
                    <p className="slides slide-1">Web Developer</p>
                    <p className="slides slide-2">Photography</p>
                    <p className="slides slide-3">Content Creator</p>
                </div>
                <svg width="100%" maxWidth="900px" height="477" viewBox="0 0 725 477" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="undraw_Upvote_re_qn2k 1" clip-path="url(#clip0)">
                    <path id="Vector" d="M708.224 434.548H67.3853C63.0108 434.543 58.8168 432.803 55.7235 429.71C52.6302 426.616 50.8903 422.422 50.8853 418.048V22.894C50.8889 19.6892 52.1636 16.6166 54.4297 14.3504C56.6958 12.0841 59.7683 10.8094 62.9732 10.8057H712.427C715.687 10.8094 718.813 12.1062 721.118 14.4116C723.423 16.717 724.72 19.8427 724.724 23.103V418.048C724.719 422.422 722.979 426.616 719.886 429.71C716.792 432.803 712.598 434.543 708.224 434.548Z" fill="#F2F2F2"/>
                    <path id="Vector_2" d="M687.504 413.716H90.2592C81.5042 413.716 74.3817 407.046 74.3817 398.847V54.7424C74.3817 48.6623 79.6597 43.7155 86.1473 43.7155H691.421C698.016 43.7155 703.382 48.7438 703.382 54.924V398.847C703.382 407.046 696.259 413.716 687.504 413.716Z" fill="white"/>
                    <path id="Vector_3" d="M724.494 24.9502H50.6537V16.5498C50.6601 12.1607 52.4072 7.95332 55.5117 4.85071C58.6163 1.7481 62.8247 0.00362614 67.2138 0H707.934C712.323 0.00360501 716.532 1.74808 719.636 4.85069C722.741 7.95331 724.488 12.1607 724.494 16.5498V24.9502Z" fill="#3F3D56"/>
                    <path id="Vector_4" d="M80.7491 16.7834C83.1148 16.7834 85.0325 14.8657 85.0325 12.5C85.0325 10.1343 83.1148 8.21658 80.7491 8.21658C78.3834 8.21658 76.4657 10.1343 76.4657 12.5C76.4657 14.8657 78.3834 16.7834 80.7491 16.7834Z" fill="white"/>
                    <path id="Vector_5" d="M97.0079 16.7834C99.3736 16.7834 101.291 14.8657 101.291 12.5C101.291 10.1343 99.3736 8.21658 97.0079 8.21658C94.6422 8.21658 92.7245 10.1343 92.7245 12.5C92.7245 14.8657 94.6422 16.7834 97.0079 16.7834Z" fill="white"/>
                    <path id="Vector_6" d="M113.267 16.7834C115.632 16.7834 117.55 14.8657 117.55 12.5C117.55 10.1343 115.632 8.21658 113.267 8.21658C110.901 8.21658 108.983 10.1343 108.983 12.5C108.983 14.8657 110.901 16.7834 113.267 16.7834Z" fill="white"/>
                    <path id="Vector_7" d="M225.337 223.338L218.96 216.48C218.817 216.326 218.643 216.203 218.451 216.119C218.258 216.035 218.05 215.991 217.839 215.991C217.629 215.991 217.421 216.035 217.228 216.119C217.035 216.203 216.862 216.326 216.718 216.48L210.341 223.338C210.251 223.434 210.182 223.547 210.136 223.67C210.09 223.793 210.069 223.924 210.074 224.056C210.079 224.187 210.109 224.316 210.164 224.436C210.219 224.555 210.296 224.663 210.392 224.752C210.489 224.842 210.602 224.911 210.725 224.957C210.848 225.003 210.979 225.024 211.11 225.019C211.242 225.015 211.371 224.984 211.49 224.929C211.61 224.875 211.717 224.797 211.807 224.701L216.838 219.289V232.577C216.838 232.842 216.943 233.097 217.13 233.284C217.318 233.472 217.572 233.577 217.838 233.577C218.103 233.577 218.357 233.472 218.545 233.284C218.732 233.097 218.838 232.842 218.838 232.577V219.285L223.87 224.701C224.051 224.894 224.301 225.008 224.566 225.017C224.831 225.027 225.089 224.931 225.283 224.75C225.477 224.57 225.592 224.32 225.602 224.055C225.612 223.79 225.516 223.532 225.337 223.338Z" fill="white"/>
                    <path id="Vector_8" d="M225.337 291.227L218.96 284.369C218.817 284.214 218.643 284.092 218.451 284.008C218.258 283.924 218.05 283.88 217.839 283.88C217.629 283.88 217.421 283.923 217.228 284.007C217.035 284.091 216.862 284.214 216.718 284.368L210.341 291.227C210.251 291.323 210.181 291.436 210.135 291.559C210.089 291.682 210.068 291.813 210.072 291.945C210.077 292.076 210.108 292.206 210.162 292.325C210.217 292.445 210.295 292.553 210.391 292.642C210.488 292.732 210.601 292.802 210.724 292.848C210.847 292.893 210.978 292.914 211.11 292.91C211.241 292.905 211.371 292.874 211.49 292.819C211.61 292.764 211.717 292.686 211.807 292.59L216.838 287.177V300.466C216.838 300.731 216.943 300.985 217.13 301.173C217.318 301.361 217.572 301.466 217.838 301.466C218.103 301.466 218.357 301.361 218.545 301.173C218.732 300.985 218.838 300.731 218.838 300.466V287.173L223.87 292.589C224.051 292.783 224.301 292.897 224.566 292.906C224.831 292.916 225.089 292.82 225.283 292.639C225.477 292.459 225.592 292.209 225.602 291.944C225.612 291.679 225.516 291.421 225.337 291.227Z" fill="white"/>
                    <g id="Vector_9">
                    <mask id="path-9-inside-1" fill="white">
                    <path d="M66.2151 138.378C79.7798 138.378 90.7762 127.381 90.7762 113.817C90.7762 100.252 79.7798 89.2556 66.2151 89.2556C52.6505 89.2556 41.6541 100.252 41.6541 113.817C41.6541 127.381 52.6505 138.378 66.2151 138.378Z"/>
                    </mask>
                    <path d="M66.2151 138.378C79.7798 138.378 90.7762 127.381 90.7762 113.817C90.7762 100.252 79.7798 89.2556 66.2151 89.2556C52.6505 89.2556 41.6541 100.252 41.6541 113.817C41.6541 127.381 52.6505 138.378 66.2151 138.378Z" fill="#AD747C" stroke="black" stroke-width="2" mask="url(#path-9-inside-1)"/>
                    </g>
                    <path id="Vector_10" d="M110.667 464.031L122.927 464.03L128.759 416.742L110.665 416.743L110.667 464.031Z" fill="#A0616A"/>
                    <path id="Vector_11" d="M107.54 460.028L131.684 460.027H131.685C133.705 460.027 135.706 460.425 137.573 461.198C139.44 461.971 141.136 463.105 142.565 464.533C143.993 465.962 145.127 467.658 145.9 469.525C146.673 471.392 147.071 473.393 147.071 475.413V475.913L107.541 475.915L107.54 460.028Z" fill="#2F2E41"/>
                    <path id="Vector_12" d="M59.667 464.031L71.927 464.03L77.759 416.742L59.665 416.743L59.667 464.031Z" fill="#A0616A"/>
                    <path id="Vector_13" d="M56.5398 460.028L80.6836 460.027H80.6846C82.7052 460.027 84.706 460.425 86.5728 461.198C88.4396 461.971 90.1357 463.105 91.5645 464.533C92.9933 465.962 94.1267 467.658 94.8999 469.525C95.6731 471.392 96.0711 473.393 96.071 475.413V475.913L56.5405 475.915L56.5398 460.028Z" fill="#2F2E41"/>
                    <path id="Vector_14" d="M57.2719 452.834C56.7948 452.413 56.4123 451.896 56.1496 451.317C55.8868 450.738 55.7498 450.11 55.7475 449.474L55.1706 272.272L119.193 269.805L119.663 269.787L130.192 376.079L131.511 443.793C131.537 444.911 131.143 445.998 130.408 446.841C129.673 447.684 128.649 448.222 127.538 448.35L111.998 450.179C111.381 450.252 110.756 450.196 110.162 450.016C109.568 449.835 109.018 449.534 108.547 449.13C108.075 448.727 107.692 448.23 107.421 447.672C107.151 447.113 106.999 446.504 106.975 445.884L104.208 373.947L90.7741 329.163C90.6328 328.86 90.3941 328.612 90.096 328.46C89.798 328.308 89.4576 328.26 89.1291 328.324C88.8006 328.388 88.5028 328.559 88.2831 328.812C88.0634 329.064 87.9344 329.383 87.9167 329.717L82.6872 447.48C82.6342 448.538 82.2095 449.543 81.4878 450.318C80.7661 451.093 79.794 451.588 78.7428 451.716L60.797 453.925C60.1657 454.003 59.5249 453.946 58.9172 453.758C58.3095 453.57 57.7486 453.255 57.2719 452.834L57.2719 452.834Z" fill="#2F2E41"/>
                    <path id="Vector_15" d="M53.2267 278.561L34.2587 201.532C28.3483 177.53 41.8498 153.363 64.3559 147.66C69.6367 146.312 75.1449 146.109 80.5105 147.066C85.876 148.023 90.9747 150.117 95.464 153.207C100.568 156.738 104.869 161.305 108.088 166.611C111.307 171.917 113.371 177.842 114.144 183.999L126.534 275.19C126.62 275.817 126.572 276.454 126.394 277.061C126.216 277.668 125.913 278.23 125.503 278.712C125.094 279.193 124.587 279.583 124.017 279.856C123.447 280.129 122.825 280.278 122.193 280.295L57.7143 281.984C57.675 281.985 57.6359 281.985 57.5968 281.985C56.5917 281.981 55.6165 281.642 54.8252 281.022C54.034 280.402 53.4716 279.536 53.2267 278.561Z" fill="#9E63FF"/>
                    <path id="Vector_16" d="M49.7701 319.438C50.6478 318.259 51.2563 316.901 51.5526 315.461C51.849 314.021 51.826 312.534 51.4853 311.104C51.1446 309.674 50.4945 308.336 49.5808 307.184C48.6671 306.033 47.512 305.095 46.1968 304.438L50.8032 269.002L34.1124 277.141L32.297 309.545C31.3398 311.827 31.2532 314.381 32.0535 316.724C32.8538 319.066 34.4854 321.033 36.6392 322.252C38.793 323.472 41.3193 323.859 43.7394 323.34C46.1595 322.822 48.3053 321.433 49.7701 319.438Z" fill="#A0616A"/>
                    <path id="Vector_17" d="M51.6858 297.851C51.3818 297.956 51.0676 298.03 50.7483 298.07L33.9029 300.2C33.2689 300.28 32.6252 300.225 32.0145 300.037C31.4038 299.849 30.8401 299.533 30.361 299.11C29.8819 298.687 29.4983 298.167 29.2358 297.584C28.9733 297.002 28.8379 296.37 28.8386 295.731L28.9716 178.109C28.9912 174.705 30.2278 171.42 32.4579 168.847C34.6879 166.275 37.7645 164.585 41.1317 164.082C43.2594 163.775 45.429 163.956 47.4767 164.61C49.5244 165.264 51.3967 166.375 52.9521 167.859C54.5076 169.343 55.7055 171.161 56.4555 173.176C57.2055 175.19 57.4879 177.349 57.2814 179.489L52.3874 230.177L54.6813 293.443C54.7206 294.402 54.4507 295.348 53.9113 296.141C53.3719 296.935 52.5917 297.534 51.6858 297.851Z" fill="#9E63FF"/>
                    <path id="Vector_18" d="M207 476.685H1C0.734784 476.685 0.480429 476.579 0.292892 476.392C0.105356 476.204 0 475.95 0 475.685C0 475.419 0.105356 475.165 0.292892 474.977C0.480429 474.79 0.734784 474.685 1 474.685H207C207.265 474.685 207.52 474.79 207.707 474.977C207.895 475.165 208 475.419 208 475.685C208 475.95 207.895 476.204 207.707 476.392C207.52 476.579 207.265 476.685 207 476.685Z" fill="#CCCCCC"/>
                    <g id="button">
                    <path id="Vector_19" d="M205 180C216.598 180 226 170.598 226 159C226 147.402 216.598 138 205 138C193.402 138 184 147.402 184 159C184 170.598 193.402 180 205 180Z" fill="#6C63FF"/>
                    <path id="Vector_20" d="M212.335 157.447L205.958 150.588C205.815 150.434 205.642 150.311 205.449 150.227C205.256 150.143 205.048 150.1 204.837 150.1C204.627 150.1 204.419 150.143 204.226 150.227C204.033 150.311 203.86 150.434 203.717 150.588L197.339 157.447C197.249 157.543 197.179 157.656 197.133 157.779C197.087 157.902 197.066 158.033 197.071 158.165C197.075 158.296 197.106 158.426 197.161 158.545C197.215 158.665 197.293 158.773 197.389 158.862C197.486 158.952 197.599 159.022 197.722 159.067C197.845 159.113 197.977 159.134 198.108 159.129C198.24 159.124 198.369 159.094 198.488 159.039C198.608 158.984 198.716 158.906 198.805 158.809L203.836 153.397V166.686C203.836 166.951 203.941 167.205 204.129 167.393C204.316 167.58 204.57 167.686 204.836 167.686C205.101 167.686 205.355 167.58 205.543 167.393C205.73 167.205 205.836 166.951 205.836 166.686V153.393L210.868 158.809C211.049 159.003 211.3 159.117 211.564 159.126C211.829 159.136 212.087 159.039 212.281 158.859C212.475 158.679 212.59 158.429 212.6 158.164C212.61 157.899 212.515 157.641 212.335 157.447Z" fill="white"/>
                    </g>
                    <g id="hand">
                    <path id="Vector_21" d="M187.694 160.046C186.23 159.905 184.754 160.087 183.368 160.579C181.983 161.07 180.722 161.86 179.675 162.891C178.627 163.923 177.819 165.171 177.306 166.549C176.793 167.927 176.589 169.4 176.707 170.866L144 185.261L159.602 195.331L188.269 180.118C190.718 179.756 192.948 178.508 194.538 176.611C196.128 174.715 196.967 172.3 196.896 169.826C196.826 167.352 195.849 164.99 194.153 163.188C192.457 161.385 190.159 160.267 187.694 160.046V160.046Z" fill="#A0616A"/>
                    </g>
                    <g id="arm">
                    <path id="Vector_22" d="M120.185 212.043L72.0965 188.686C70.0855 187.709 68.2991 186.325 66.8504 184.623C65.4017 182.92 64.3223 180.935 63.6803 178.793C63.0383 176.652 62.8479 174.4 63.121 172.181C63.3941 169.962 64.1247 167.824 65.2668 165.902C66.4088 163.98 67.9373 162.316 69.7557 161.016C71.574 159.715 73.6426 158.806 75.8304 158.346C78.0182 157.886 80.2777 157.885 82.4659 158.343C84.6541 158.801 86.7234 159.709 88.5428 161.008L127.451 188.794L169.453 172.069C170.289 171.733 171.207 171.658 172.087 171.852C172.966 172.046 173.767 172.5 174.385 173.155L180.049 179.136C180.502 179.614 180.844 180.185 181.052 180.81C181.26 181.434 181.328 182.097 181.252 182.751C181.176 183.405 180.957 184.034 180.611 184.594C180.265 185.154 179.801 185.631 179.251 185.992L141.648 210.662C138.492 212.721 134.858 213.93 131.098 214.172C127.337 214.414 123.578 213.681 120.185 212.043V212.043Z" fill="#9E63FF"/>
                    </g>
                    <g id="Vector_23" filter="url(#filter0_d)">
                    <path d="M54.5738 135.997C52.4503 136.036 50.3445 135.627 48.4111 134.798C47.5486 134.441 46.6532 134.147 45.7922 133.789C38.1886 130.629 33.1798 121.919 33.0004 113.153C32.9783 108.879 33.881 104.646 35.6532 100.712C37.4254 96.7782 40.0301 93.2259 43.3081 90.2722C49.4956 84.9075 57.4326 81.681 65.8198 81.1208C74.5749 80.4037 84.4333 82.7919 89.3256 90.6346C90.0692 91.6696 90.5806 92.8369 90.8285 94.0649C91.0763 95.2928 91.0554 96.5555 90.7669 97.7755C90.547 98.5176 90.1358 99.1971 89.5699 99.7533C87.3851 101.844 85.207 100.272 82.9797 100.133C79.9184 99.9421 77.1689 102.608 76.1806 105.73C75.1924 108.852 75.6274 112.29 76.4253 115.474L76.44 115.534C76.6205 116.277 76.63 117.048 76.4679 117.796C76.3057 118.543 75.9757 119.249 75.5 119.866C75.0243 120.483 74.4139 120.997 73.7098 121.373C73.0058 121.749 72.2244 121.979 71.4182 122.047C68.0513 122.334 64.3527 122.512 63.2968 122.045C61.2293 121.131 58.4516 121.334 57.2482 123.36C56.8621 124.109 56.604 124.91 56.4835 125.735C55.4047 131.022 55.6527 130.711 54.5738 135.997L54.5738 135.997Z" fill="black"/>
                    <path d="M54.5738 135.997C52.4503 136.036 50.3445 135.627 48.4111 134.798C47.5486 134.441 46.6532 134.147 45.7922 133.789C38.1886 130.629 33.1798 121.919 33.0004 113.153C32.9783 108.879 33.881 104.646 35.6532 100.712C37.4254 96.7782 40.0301 93.2259 43.3081 90.2722C49.4956 84.9075 57.4326 81.681 65.8198 81.1208C74.5749 80.4037 84.4333 82.7919 89.3256 90.6346C90.0692 91.6696 90.5806 92.8369 90.8285 94.0649C91.0763 95.2928 91.0554 96.5555 90.7669 97.7755C90.547 98.5176 90.1358 99.1971 89.5699 99.7533C87.3851 101.844 85.207 100.272 82.9797 100.133C79.9184 99.9421 77.1689 102.608 76.1806 105.73C75.1924 108.852 75.6274 112.29 76.4253 115.474L76.44 115.534C76.6205 116.277 76.63 117.048 76.4679 117.796C76.3057 118.543 75.9757 119.249 75.5 119.866C75.0243 120.483 74.4139 120.997 73.7098 121.373C73.0058 121.749 72.2244 121.979 71.4182 122.047C68.0513 122.334 64.3527 122.512 63.2968 122.045C61.2293 121.131 58.4516 121.334 57.2482 123.36C56.8621 124.109 56.604 124.91 56.4835 125.735C55.4047 131.022 55.6527 130.711 54.5738 135.997L54.5738 135.997Z" stroke="black" stroke-opacity="0.73"/>
                    </g>
                    </g>
                    <defs>
                    <filter id="filter0_d" x="29" y="81" width="66" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <clipPath id="clip0">
                    <rect width="724.724" height="476.685" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
            </div>
            <div className="bio">
                <p className="bio-paragraph">I'm a developer with a goal of getting small businesses online.</p>
                <p className="bio-paragraph">When I'm not typing away you can find me playing guitar, listening to music, or outdoors taking pictures.</p>
            </div>
        </div>

        <div class="contact-wrapper">
            <div className="social-media-wrapper jalapina">
                <a class="links" href="https://www.youtube.com/channel/UCcXwNOc2qDlk043kJfbKPgA" title="youtube">
                    <Image filename="youtube.png"/>
                </a>
            </div>
            <div className="social-media-wrapper">
                <a class="links" href="https://github.com/Jalapina" title="github">
                    <Image filename="github-logo-silhouette-in-a-square.png"/>
                </a>
            </div>
            <div className="social-media-wrapper">
                <a class="links" href="https://www.linkedin.com/in/david-pina-8a46128a/" title="linkedin">
                    <Image filename="linkedin.png"/>
                </a>
            </div>
            <div className="social-media-wrapper jalapina">
                <a class="links" href="https://www.jalapina.com/" title="jalapina">
                    <Image filename="jalapeno.png"/>
                </a>
            </div>
        </div>

        <div className="projects">
            <h2 className="my-projects-title">My Projects</h2>

            <div className="project">
                <h3>Crypto Conchas</h3>
                <div className="description conchas desktop">
                    <p>Limited collection of concha NFT's running on the Solana devnet</p>
                    <a href="https://cryptoconchas.com">
                        <button className="website-link-button">
                            Go to Website
                        </button>
                    </a>
                </div>
                <div className="project-image-wrapper">
                    <Image loading="lazy" filename="cryptoconchas-macbook-mockup.png" alt="Tony's Website" height="270px" width="100%"/>
                </div>
                <div className="description mobile">
                    <p> NFT collection of conchas (Mexican style bread) running on the Solana devnet</p>
                    <a href="https://cryptoconchas.com">
                        <button className="website-link-button">
                            Go to Website
                        </button>
                    </a>
                </div>
            </div>

            <div className="project">
                <h3>Doughballs Pizza</h3>
                <div className="description">
                    <p>Pizza shop website</p>
                    <a href="https://doughballspizzas.com">
                        <button className="website-link-button">
                            Go to Website
                        </button>
                    </a>
                </div>
                <div className="project-image-wrapper">
                    <Image loading="lazy" filename="doughballs.png" alt="Tony's Website" height="270px" width="100%"/>
                </div>

            </div>
            
            <div className="project">
                <h3>Tonys Sewer Drain</h3>
                <div className="description desktop">
                    <p>Aurora IL, Sewer business</p>
                    <a href="https://tonysdrain-ef299.web.app/">
                        <button className="website-link-button">
                            Go to Website
                        </button>
                    </a>
                </div>
                <div className="project-image-wrapper">
                    <Image loading="lazy" filename="tony-mockup.png" alt="Tony's Website" height="270px" width="100%"/>
                </div>
                <div className="description mobile">
                    <p>Sewer and plumbing business</p>
                    <a href="https://tonysdrain-ef299.web.app/">
                        <button className="website-link-button">
                            Go to Website
                        </button>
                    </a>
                </div>
            </div>

            <div className="project">
                <h3>Dark Horse Grill and catering</h3>
                <div className="description">
                    <p>Food catering business</p>
                    <a href="https://darkhorsegrillandcatering.com/">
                        <button className="website-link-button">
                            Go to Website
                        </button>
                    </a>
                </div>
                <div className="project-image-wrapper">
                    <Image loading="lazy" filename="darkhorse.png" alt="Tony's Website" height="270px" width="100%"/>
                </div>
            </div>

            <div className="project">
                <h3>Kevin's landscaping</h3>
                <div className="description desktop">
                    <p>Landscaping website</p>      
                    <a href="https://kevinslandscaping.llc/">
                        <button className="website-link-button">
                            Go to Website
                        </button>              
                    </a>
                </div>
                <div className="project-image-wrapper">
                    <Image loading="lazy" filename="landscaping.png" alt="Tony's Website" height="270px" width="100%"/>
                </div>
                <div className="description mobile">
                    <p>Landscaping website</p>      
                    <a href="https://kevinslandscaping.llc/">
                        <button className="website-link-button">
                            Go to Website
                        </button>              
                    </a>
                </div>
            </div>

            <div className="project">
                
                <h3>Home Rehab Consulting</h3>

                <div className="description">
                    <p>Home flipping consulting</p>
                    <a href="https://homerehabconsulting.com/">
                        <button className="website-link-button">
                            Go to Website
                        </button>
                    </a>
                </div>

                <div className="project-image-wrapper">
                    <Image loading="lazy" className="project-gif" filename="consulting.png" alt="Tony's Website" height="270px" width="100%"/>
                </div>

            </div>


            <div className="project">
                <h3>Wavpoint</h3>
                <div className="description conchas desktop">
                    <p>Up and coming artist staic website</p>      
                    <a href="https://wavpoint.co">
                        <button className="website-link-button">
                            Go to Website
                        </button>              
                    </a>
                </div>
                <div className="project-image-wrapper">
                    <Image loading="lazy" filename="wavpoint-iphone-mockup.png" alt="Tony's Website" height="270px" width="100%"/>
                </div>
                <div className="description mobile">
                    <p>Aurora up and coming artist staic website</p>      
                    <a href="https://wavpoint.co">
                        <button className="website-link-button">
                            Go to Website
                        </button>              
                    </a>
                </div>
            </div>


        </div>

        <div className="load-more-projects-button">
            <button onClick={()=>toggleModal()}>
                {visible ? "See Less" : "See More Projects"}
            </button>
        </div>

        <div className={`more-projects ${visible}`}>

            <div className="project">
                <h3>Clock In App</h3>
                <div className="project-image-wrapper">
                    <img src="https://user-images.githubusercontent.com/26069518/68709806-03f8f980-055c-11ea-98d8-9058003e9862.gif" alt="Fizzbuzz Web Project" height="270px" width="100%" loading="lazy"/>
                </div>
                <div className="description">
                    <p>Clock in app that allows users to clock in from anywhere via geolocation and image upload</p>
                    <p>User total hours are calculated along with their hourly wage on each location</p>
                </div>
            </div>

            <div className="project">
                <h3>FriendZone</h3>
                <div className="description mobile">
                    <div className="preview">
                        <a href="https://github.com/Jalapina/friendZone">github</a>
                    </div>
                    <p>Tinder like clone that allows users to find new friends around their area</p>
                </div>
                <div className="project-image-wrapper">
                    <img src="https://user-images.githubusercontent.com/26069518/53443815-21883200-39d2-11e9-94c1-b2c5abb916d0.gif" alt="friendZone gif" height="270px" width="100%" loading="lazy" />
                </div>

                <div className="description desktop">
                    <div className="preview">
                        <a href="https://github.com/Jalapina/friendZone">github</a>
                    </div>
                    <p>Tinder like clone using Angular 4, NodeJs, Express, and MongoDB</p>
                </div>
            </div>

            <div className="project">
                <h3 className="project-name">Pokedex</h3>
                <div className="project-image-wrapper">
                    <img src="https://user-images.githubusercontent.com/26069518/53399582-df2f0880-3971-11e9-9cf4-99c3680cd213.gif" alt="weather api gif" height="270px" width="100%" loading="lazy" />
                </div>

                <div className="description">
                    <div className="preview">
                        <a href="https://github.com/Jalapina/Pokemon-API">github</a>
                    </div>
                    <p>Pokedex displays all 151 V2 Pokemon using the Pokeapi.co API</p>
                </div>
            </div>
            
            <div className="project">
                <h3 className="project-name">Weather App</h3>
                <div className="description mobile">
                    <div className="preview">
                        <a href="https://weather-app-7c197.firebaseapp.com">Demo</a>
                    </div>
                    <p>Open weather map API app using geolocation and Angular 6</p>
                </div>
                <div className="project-image-wrapper">
                    <img src="https://user-images.githubusercontent.com/26069518/59883268-12aafe00-937a-11e9-9d21-e9979d62c322.gif" alt="Pokedex API" height="270px" width="100%" loading="lazy" />
                </div>

                <div className="description desktop">
                    <div className="preview">
                        <a href="https://weather-app-7c197.firebaseapp.com">Demo</a>
                    </div>
                    <p>Open weather map API app using geolocation and Angular 6</p>
                </div>
            </div>

            <div className="project">
                <h3 className="project-name">FizzBuzz</h3>
                <div className="project-image-wrapper">
                    <img src="https://user-images.githubusercontent.com/26069518/53699217-87e2cb00-3dab-11e9-8bc4-5a4e7ac630c0.gif" alt="Fizzbuzz Gif" height="270px" width="100%" loading="lazy" />
                </div>

                <div className="description">
                    <div className="preview">
                        <a href="https://github.com/Jalapina/fizzbuzz">github</a>
                    </div>
                    <p>Fizzbuzz game, displays count from 1 to 100 in animation with jQuery</p>
                </div>
            </div>

        </div>

        <div class="skills">
            <p>SKILLS</p>
            <p class="skill">JavaScript</p>
            <p class="skill">Ruby</p>
            <p class="skill">Python</p>
            <p class="skill">Node</p>
            <p class="skill">Express</p>
            <p class="skill">Angular</p>
            <p class="skill">React</p>
            <p class="skill">Gatsby</p>
            <p class="skill">HTML</p>
            <p class="skill">CSS</p>
            <p class="skill">SASS</p>
            <p class="skill">Bootstraps</p>
            <p class="skill">Materialize</p>            
            <p class="skill">jQuery</p>
            <p class="skill">AWS</p>
            <p class="skill">Firebase</p>
            <p class="skill">Git</p>
            <p class="skill">MySQL</p>
            <p class="skill">MongoDB</p>
            <p class="skill">Photoshop</p>
            <p class="skill">Adobe Premiere</p>
            <p class="skill">Solana metaplex</p>
            <p class="skill">Blockchain</p>
            <p class="skill">Solidity</p>
            <p class="skill">Photography</p>
        </div>

        <div class="contact-me">
            <h2>Contact Me</h2>
            <form action="https://formsubmit.co/davidpina14@gmail.com" method="POST" id="contact-form">
                <input type="name" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Email"/>
                <textarea name="message" placeholder="What's up?"></textarea>
                <input type="text" name="_honey" style={{display:'none'}}/>
                <input type="hidden" name="_template" value="table"/>
                <input type="hidden" name="_next" value="https://davidpina.dev"/>
                <input type="hidden" name="_subject" value="New Message from website"/>
                <input type="submit" name="send" value="Send"/>
            </form>
        </div>

    </div>
  </Layout>
)}

export default IndexPage
