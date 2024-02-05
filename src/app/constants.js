import {
  FaFilePdf,
  FaCropAlt,
  FaFileWord,
  FaFileExcel
  
} from "react-icons/fa";
import { BiSolidFileJpg,  BiSolidFileTxt  } from "react-icons/bi";
import { BsFileEarmarkPptFill } from "react-icons/bs";
import {MdFindReplace, MdCropRotate} from 'react-icons/md'
import { CiBookmark} from "react-icons/ci";
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";
const tools = [
  {
    id: 1,
    color: "orange",
    toolTitle: "Edit Pdf",
    toolDesc: "Use the best online tool to edit pdfs in your browser",
    toolIcon: <FaFilePdf size={48} />,
  },
  {
    id: 2,
    color: "orange",
    toolTitle: "Crop Pdf",
    toolDesc: "Crop pdf online to a selected area",
    toolIcon: <FaCropAlt size={48} />,
  },
  {
    id: 3,
    color: "orange",
    toolTitle: "Replace Pdf",
    toolDesc: "The eaiset way to replace text online",
    toolIcon: <MdFindReplace size={48} />,
  },
  {
    id: 4,
    color: "orange",
    toolTitle: "Rotate Pdf",
    toolDesc: "Rotate and save pdf files online for free",
    toolIcon: <MdCropRotate size={48} />,
  },
  {
    id: 5,
    sliderBack: <IoArrowBackCircleOutline size={32} />,
    bookmark: <CiBookmark  size={32} />,
    color: "blue",

    toolTitle: "Pdf to word",
    toolDesc: "easy convert pdf to word",
    toolIcon: <FaFileWord color="blue" size={48} />,
  },
  {
    id: 6,
    bookmark: <CiBookmark size={32} />,
    toolTitle: "Pdf to PPT",
    toolDesc: "convert pdf to ppt online",
    toolIcon: <BsFileEarmarkPptFill color="orangered" size={48} />,
    color: "orange",
  },
  {
    id: 7,
    toolTitle: "Pdf to Excel",
    bookmark: <CiBookmark size={32} />,
    toolDesc: "convert pdf to excel for free",
    toolIcon: <FaFileExcel color="green" size={48} />,
    color: "green",
  },
  {
    id: 8,
    toolTitle: "Pdf to JPG",
    bookmark: <CiBookmark size={32} />,
    toolDesc: "convert pdf to jfg online for free",
    toolIcon: <BiSolidFileJpg color="darkgreen" size={48} />,
    color: "green",
  },
  {
    id: 9,
    toolTitle: "Pdf to Text",
    sliderForward: <IoArrowForwardCircleOutline size={32} />,
    toolDesc: "convert your pdf to text",
    toolIcon: < BiSolidFileTxt color="greenyellow"  size={48} />,
    bookmark: <CiBookmark size={32} />,
    color: "orange",
  },
];

const menuItems = [
  {
    id: 1,
    itemText: "StockVideo",
    destination: "#",
  },
  {
    id: 2,
    itemText: "VideoTemplates",
    destination: "#",
  },
  {
    id: 3,
    itemText: "Music",
    destination: "#",
  },
  {
    id: 4,
    itemText: "Sound Effects",
    destination: "#",
  },
  {
    id: 5,
    itemText: "Graphic Templates",
    destination: "#",
  },
  {
    id: 6,
    itemText: "Graphics",
    destination: "#",
  },
  {
    id: 7,
    itemText: "Presentation Templates",
    destination: "#",
  },
  {
    id: 8,
    itemText: "Photos",
    destination: "#",
  },
  {
    id: 9,
    itemText: "Fonts",
    destination: "#",
  },
  {
    id: 10,
    itemText: "Add-ons",
    destination: "#",
  },
  {
    id: 11,
    itemText: "More",
    destination: "#",
  },
];

/**footer links */

const footerLinks = [
  {
    id: 1,
    title: "Internal Links",
    navItems: ["Documentries", "Themes", "Chrome Casts"],
  },
  {
    id: 2,
    title: "Enterprise",
    navItems: [
      "Download Chrome Browser",
      "Chrome Browser For Enterprise",
      "Chrome Browser Devices",
      "ChromeOS",
      "Google Cloud",
      "Google Workspace",
    ],
  },
  {
    id: 3,
    title: "Internal Links",
    navItems: ["Documentries", "Themes", "Chrome Casts"],
  },
  {
    id: 4,
    title: "Enterprise",
    navItems: [
      "Download Chrome Browser",
      "Chrome Browser For Enterprise",
      "Chrome Browser Devices",
      "ChromeOS",
      "Google Cloud",
      "Google Workspace",
    ],
  },
  {
    id: 5,
    title: "Internal Links",
    navItems: ["Documentries", "Themes", "Chrome Casts"],
  },
];

export { tools, menuItems, footerLinks };
