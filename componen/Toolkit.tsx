import React from "react";

interface TechLogoProps {
  name: string;
  imgSrc: string;
}

class TechLogo extends React.Component<TechLogoProps> {
  render() {
    const { name, imgSrc } = this.props;

    return (
      <div className="flex flex-col items-center group relative">
        <div className="w-36 h-36 md:w-40 md:h-40 rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-105 bg-white p-4">
          <img
            src={imgSrc}
            alt={name}
            className="w-28 h-28 md:w-32 md:h-32 object-contain"
          />
        </div>

        <p className="mt-3 text-sm font-semibold text-white">
          {name}
        </p>
      </div>
    );
  }
}

class Toolkit extends React.Component {
  technologies = [
    {
      name: "HTML5",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Laravel",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "React Native",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "GitHub",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "XAMPP",
      imgSrc:
        "https://www.apachefriends.org/images/xampp-logo-ac950edf.svg",
    },
{
  name: "php ",
  imgSrc:
    "https://cdn.simpleicons.org/php/777BB4",
},
{
  name: "Laragon",
  imgSrc: "/image/skills/laragon.svg",
},
  ];

  render() {
    return (
      <div className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-14">
            {this.technologies.map((tech, index) => (
              <TechLogo
                key={index}
                name={tech.name}
                imgSrc={tech.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Toolkit;