import images from "./images";
import { FaPaperPlane, FaEdit, FaRocket, FaShoppingCart, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { ImMagicWand } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";

const gradient = "url(#blue-gradient)";

const services = [
    {
        id: 1,
        icon: <FaEdit style={{ fill: gradient }} />,
        title: "Digital Marketing",
        text: "Let's share and learn together"
    },
    {
        id: 2,
        icon: <FaEdit style={{ fill: gradient }} />,
        title: "Ngôn ngữ anh",
        text: "Let's share and learn together"
    },
    {
        id: 3,
        icon: <FaEdit style={{ fill: gradient }} />,
        title: "Ngôn ngữ nhật",
        text: "Let's share and learn together"
    },
    {
        id: 4,
        icon: <FaEdit style={{ fill: gradient }} />,
        title: "C++/Java/C#",
        text: "Let's share and learn together"
    },
    {
        id: 5,
        icon: <FaEdit style={{ fill: gradient }} />,
        title: "Grpahic Design",
        text: "Let's share and learn together"
    },
    {
        id: 6,
        icon: <FaEdit style={{ fill: gradient }} />,
        title: "Truyền thông đa phương tiện",
        text: "Let's share and learn together",
    }
];

// const about = [
//     {
//         id: 7,
//         text: " "
//     }
// ]



const mentors = [
    {
        id: 19,
        name: "Marie Jordan",
        text: "C++",
        image: images.customer_img_1,
        rating: 3
    },
    {
        id: 20,
        name: "Ann Brown",
        text: "Ngôn ngữ anh",
        image: images.customer_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "Andrew Bill",
        text: "Ngôn ngữ anh",
        image: images.customer_img_3,
        rating: 2
    },
    {
        id: 22,
        name: "Jason Stawer",
        text: "Digital Marketing",
        image: images.customer_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Lisa Green",
        text: "Java",
        image: images.customer_img_5,
        rating: 2
    },
    {
        id: 24,
        name: "Anna Doe",
        text: "Grpahic Design",
        image: images.customer_img_6,
        rating: 4
    }
]

// const contact = [
//     {
//         id: 25,
//         icon: <FaPhoneAlt style={{ fill: gradient }} />,
//         info: "",
//         text: ""
//     },
//     {
//         id: 26,
//         icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
//         info: "",
//         text: ""
//     },
//     {
//         id: 27,
//         icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
//         info: "",
//         text: ""
//     }
//]

const sections = { services, mentors };

export default sections;