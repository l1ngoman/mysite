const content = {
  paragraphs: {
    bs_t3: 
      [
        "This game is a combination of Battleship and TicTacToe that I made in React.js. A player can choose which game to play with the radio buttons at the top of the page."
      ],
    battleship: 
      [
        "When playing Battleship, you are trying to sink all of the computer's ships with a limit of 50 torpedos. The computer has 5 ships total: a 5-piece, a 4-piece, two 3-pieces, and a 2-piece. As you click around on the board, the squares will turn white for misses and red if you hit part of a ship. If the going gets tough, there is also a cheat button that reveals where the ships are hiding - just hit the select button!",
        "Battleship was both incredibly fun, and incredibly challenging to make. I made this with my friend Evan after we tried for over a week to build our first attempt at TicTacToe. After gaining all the knowledge we had about React from that first project, starting on this one seemed like it would take us forever! However, we only spent about 3-4 days on this project, eventhough it was significantly more tedious.",
        "Most of this app's challenges lie in the logic. We had to create and render a gameboard that was over 10 times larger than in our last project, map out and log all of the game actions, randomly generate ships that would not overlap or extend past the board, and somehow determine a winner after all of that was said and done.",
        "Overall, this was a very fun project! I hopefully will return to it one day to clean up some code and add a few new features. It is definitely worth trying if you are newer to Javascript or React. The challenges that it poses are great learning opportunities!"
      ],
    tictactoe: 
      [
        "This version of TicTacToe requires that you grab a freind or play against yourself. The two teams are comprised of either Marvel or DC characters (Marvel goes first). Pick your favorite character to be your icon. You can even change characters after the game is in progress!",
        "TicTacToe was my very first experinece with React.js. I worked on it for a solid week with three other advanced people from my class. Even with all that time, we had a much lower quality product. I went back and rebuilt this version on my own in just a few hours after becoming much more comfortable with React.",
        "If I had to choose only one takeaway from this experience, it would be learning how to use closures to pass information from child components up to parent components. This was how we let the board (our parent component) know which box was being clicked on to save to the game status array."
      ],
    nasa_neo: [
        "This project was my first attempt working with an external API. I used Nasa's free 'Near Earth Object' API in order to create this app that you can use to see data on the closest objects that approach the Earth. You can toggle the data to switch between imperial and metric units of measure, and you can also search for near Earth objects by the dates they approach the Earth.",
        "I had many challenges with this project. The first was to try to understand the curl command and why it is necessary to develop a project like this. Fetching data from such a massive API like this one requires knowledge about how the data is formatted. Using the curl command, you can extract a piece of data from the API to get an idea of how to access the specific values you need.",
        "After extract that first piece of JSON, you can craft a fetch call that will pull that data out and place it into your React state using the componentDidMount lifecycle method. Once the data is in your state, you are free to manipulate it anyway you like. In my example, I simply put it into a table format, but you could easily do much more with it, such as creating a graphic visualization or adding pieces of it to another database.",
        "This project was definitely a much needed stepping stone on the path to my final project, where I had to not only create my own API endpoints for capturing and transmitting data, but also use an external endpoint from Twilio to send text messages."
      ],
    own_up: [
        "Own Up Grown Up is a scheduling and reminder application that bridges the gap between being an adult and actually remembering what adults have to do. Own Up Grown Up's platform makes scheduling all your 'adulting' needs fast and reliable. From car maintenance to home maintenance, Own Up Grown Up has all your scheduling and reminder needs.",
        "Own Up Grown Up 1.0 was created by TEAM JACK (Julianne Peters, Andrew Garrett, Chris Stubbs, and Kristen McCloud) as a group project at LEARN Academy, a full-stack web development bootcamp. We utilized an Agile/SCRUM workflow to take the project from a raw idea to completion.",
        "The basic structure of the app is decoupled. React.js comprises our front end, and our back end uses Ruby on Rails and PostgreSQL. We also incorporated an external API called Twilio for text messaging services.",
        "This app did not seem so overwhelmingly daunting during the design phase, but it definitely challenged all of us to grow as developers. We first had to design a wireframe for each landing page, then create a secure login for our users (we used the Devise gem), build the content of the database (the 'tasks'), research and link to the Twilio API, and finally deploy and link our front and back ends. It was a mammoth undertaking to design and deploy a functional project in only two weeks.",
        "Julianne and I decided to continue to work on the project after our class ended. We have been polishing the front end mostly, but we do also have plans to expand the functionality of the app. Our vision is to implement a email messaging service to compliment the texting service we have setup. We also would love to add more validations, refactor existing code, and connect with more APIs, such as Google Calendar."
    ]
  },
  languageInfo: [
    {
      name: "React.js", // 0
      logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      link: "https://reactjs.org/"
    },
    {
      name: "Javascript", // 1
      logo: "https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png",
      link: "https://www.javascript.com/"
    },
    {
      name: "Ruby", // 2
      logo: "https://www.fullstacklabs.co/img/developersRuby/Ruby@2x.png",
      link: "https://www.ruby-lang.org/en/"
    },
    {
      name: "Ruby on Rails", // 3
      logo: "https://www.esferasoft.com/images/ruby.png",
      link: "https://rubyonrails.org/"
    },
    {
      name: "HTML5", // 4
      logo: "https://seravo.fi/wp-content/uploads/2013/12/HTML5logo.png",
      link: "https://www.w3schools.com/html/html5_intro.asp"
    },
    {
      name: "CSS3", // 5
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png",
      link: "https://www.w3schools.com/css/"
    },
    {
      name: "NasaAPI", // 6
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png",
      link: "https://api.nasa.gov/api.html#NeoWS"
    },
    {
      name: "Twilio", // 7
      logo: "https://www.twilio.com/marketing/bundles/company/img/logos/red/twilio-mark-red.png",
      link: "https://www.twilio.com/"
    },
    {
      name: "PHP", // 8
      logo: "https://pngimg.com/uploads/php/php_PNG44.png",
      link: "http://www.php.net/"
    },
    {
      name: "MySQL", // 9
      logo: "https://pngimg.com/uploads/mysql/mysql_PNG9.png",
      link: "https://www.mysql.com/"
    },
    {
      name: "Devise", // 10
      logo: "https://camo.githubusercontent.com/b1c21cc10f2f94857dea5135fe55f2e4d451e028/68747470733a2f2f7261772e6769746875622e636f6d2f706c617461666f726d617465632f6465766973652f6d61737465722f6465766973652e706e67",
      link: "https://github.com/plataformatec/devise"
    },
    {
      name: "Git", // 11
      logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      link: "https://git-scm.com/doc"
    }
  ],
}


export default content;
