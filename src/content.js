const content = {
  paragraphs: {
    home: {
      about: 
        [
          "Hello! My name is Andrew, and I am a recent convert to the tech field who is transitioning from a retail management background in durable medical equipment (DME). I decided in Februrary of 2018 that I wanted to pursue a career in coding after rediscovering Java eight years after taking my first class. I quickly fell back in love with the science and craft of software design and began my journey to becoming a developer.",
          "I recently completed a full-stack web development bootcamp at LEARN Academy where I gained 480+ hours of coding experience with web development using popular frameworks such as React.js and Ruby on Rails. Throughout the program, we explored various technologies and methodologies that are in high demand, and I am eager to use what I have learned in a new professional setting.",
          "After the bootcamp, I worked as an intern at a local San Diego startup called The 5th Ingredient, where I built features onto their existing software application. In addition to the Javascript I knew, I learned to use the MAMP stack and jQuery to craft custom fields for each module of their software and also added editing functionality for their users to change database entries. I also received advice and mentorship from two top-tier industry professionals.",
          "I am currently seeking an opportunity as a junior full-stack web developer or software engineer in the Greater San Diego Area.",
        ],
      tech: 
        [
          "A recent convert to the tech field who transitioning from the retail and healthcare industries. I recently finished a full-stack web development bootcamp at LEARN Academy where I gained 480+ hours of coding experience with Javascript, React.js, Ruby, Ruby on Rails, and PostrgreSQL. Afterwards, I interned with The 5th Ingredient, a local San Diego tech startup, and built features onto their existing web-based software using PHP, jQuery, and MySQL. I am currently seeking an opportunity as a junior full-stack web developer or software engineer in the Greater San Diego Area.",
        ],
      resume:
        [
          "A four-week internship of hands-on experience building features for an local startup’s existing online software platform. I learned new technologies, such as PHP, MySQL, and jQuery as well as valuable industry skills like navigating an existing codebase of 100+ files and thousands of lines of code all under the mentorship of two talented and seasoned industry professionals.",
          "LEARN Academy is an intensive coding and full stack development boot camp where I gained 480+ hours of direct coding experience and a month-long internship with a local San Diego tech company. This opportunity gave me experience working with the full-stack development process using techniques such as pair and mob programming based on an Agile/SCRUM workflow. Through this program, I was also able to deploy five complete and responsive web apps in three months. Our languages of focus were Javascript, React.js, Ruby, Ruby on Rails, and PosgreSQL.",
          "In addition to coding, I also play double bass in a community orchestra called the Greater San Diego Chamber Coterie. I have been playing with them for over three years now, and with my new coding skills, I have volunteered to help maintain and build new features onto the organization's website. The site uses the Wordpress 5.0 platform and uses various plugins. I am very grateful that I can gain experience with new technologies while also giving back to an organization that I love!"
        ]
    },
    bs_t3: 
      [
        "This game is a combination of Battleship and TicTacToe that I made in React.js. A player can choose which game to play with the radio buttons at the top of the page."
      ],
    battleship: 
      [
        "When playing Battleship, you are trying to sink all of the computer's ships with a limit of 50 torpedos. The computer has 5 ships total: a 5-piece, a 4-piece, two 3-pieces, and a 2-piece. As you click around on the board, the squares will turn white for misses and red if you hit part of a ship. If the going gets tough, there is also a cheat button that reveals where the ships are hiding - just hit the select button!",
        "Battleship was both incredibly fun, and incredibly challenging to make. I made this with my friend Evan after we tried for over a week to build our first attempt at TicTacToe. After gaining all the knowledge we had about React from that first project, starting on this one seemed like it would take us forever! However, we only spent about 3-4 days on this project, even though it was significantly more tedious.",
        "Most of this app's challenges lie in the logic. We had to create and render a gameboard that was over 10 times larger than in our last project, map out and log all of the game actions, randomly generate ships that would not overlap or extend past the board, and somehow determine a winner after all of that was said and done.",
        "Overall, this was a very fun project! I hopefully will return to it one day to clean up some code and add a few new features. It is definitely worth trying if you are newer to Javascript or React. The challenges that it poses are great learning opportunities!"
      ],
    tictactoe: 
      [
        "This version of TicTacToe requires that you grab a friend or play against yourself. The two teams are comprised of either Marvel or DC characters (Marvel goes first). Pick your favorite character to be your icon. You can even change characters after the game is in progress!",
        "TicTacToe was my very first experience with React.js. I worked on it for a solid week with three other advanced people from my class. Even with all that time, we had a much lower quality product. I went back and rebuilt this version on my own in just a few hours after becoming much more comfortable with React.",
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
    },
    {
      name: "PostgreSQL", // 12
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/2000px-Postgresql_elephant.svg.png",
      link: "https://www.postgresql.org/docs/"
    },
    {
      name: "Atom", // 13
      logo: "https://seeklogo.com/images/A/atom-logo-19BD90FF87-seeklogo.com.png",
      link: "https://atom.io/docs"
    },
    {
      name: "Visual Studio Code", // 14
      logo: "https://user-images.githubusercontent.com/49339/32078472-5053adea-baa7-11e7-9034-519002f12ac7.png",
      link: "https://code.visualstudio.com/docs"
    },
    {
      name: "Rspec", // 15
      logo: "http://rspec.info/images/logo_ogp.png",
      link: "http://rspec.info/documentation/"
    },
    {
      name: "Jest", // 16
      logo: "https://camo.githubusercontent.com/31983294a16a373a7e752b57904f64cc030750db/68747470733a2f2f6a6573746a732e696f2f696d672f6a6573742e706e67",
      link: "https://jestjs.io/docs/en/getting-started"
    },
    {
      name: "Java SE 9", // 17
      logo: "https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png",
      link: "https://docs.oracle.com/en/java/"
    },
    {
      name: "IntelliJ", // 18
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/IntelliJ_IDEA_Logo.svg/2000px-IntelliJ_IDEA_Logo.svg.png",
      link: "https://www.jetbrains.com/idea/"
    },
    {
      name: "Eclipse", // 19
      logo: "https://www.logolynx.com/images/logolynx/70/70bdf1f34c9712ad1bf95170c681e119.png",
      link: "https://help.eclipse.org/2018-09/index.jsp"
    },
    {
      name: "Yarn", // 20
      logo: "https://avatars3.githubusercontent.com/u/22247014?s=400&v=4",
      link: "https://yarnpkg.com/lang/en/docs/"
    },
    {
      name: "NPM", // 21
      logo: "https://pbs.twimg.com/profile_images/1070861268246978560/ObS2CG3t_400x400.jpg",
      link: "https://docs.npmjs.com/"
    },
    {
      name: "RVM", // 22
      logo: "https://1.bp.blogspot.com/-LZS_00gnLyc/VuCk7eGs2UI/AAAAAAAAA8Q/4qvFQj1uBhI/s1600/logo.png",
      link: "https://rvm.io/"
    },
    {
      name: "Rbenv", // 23
      logo: "https://cdn-images-1.medium.com/max/303/1*uWkk81ORI1zqH_j8cgBXaw.png",
      link: "https://github.com/rbenv/rbenv"
    },
    {
      name: "jQuery", // 24
      logo: "https://js.foundation/wp-content/uploads/sites/33/2017/02/jquery.png",
      link: "https://api.jquery.com/"
    },
    {
      name: "BitBucket", // 25
      logo: "https://seeklogo.com/images/B/bitbucket-logo-D072214725-seeklogo.com.png",
      link: "https://bitbucket.org/product"
    },
    {
      name: "Test Driven", // 26
      logo: "https://www.aresourcepool.com/wp-content/uploads/2017/09/tdd.png",
      link: "https://en.wikipedia.org/wiki/Test-driven_development"
    },
    {
      name: "Object Oriented", // 27
      logo: "https://i.pinimg.com/originals/45/03/98/450398f4ff10d0253602b6a6d99419ed.png",
      link: "https://en.wikipedia.org/wiki/Object-oriented_programming"
    },
    {
      name: "RESTful", // 28
      logo: "https://restfulapi.net/wp-content/uploads/rest.png",
      link: "https://restfulapi.net/"
    },
    {
      name: "SCRUM", // 29
      logo: "https://ullizee.files.wordpress.com/2013/01/scrum-org-logo-circles.png",
      link: "https://www.scrum.org/forum/scrum-forum/14437/agile-and-documentation"
    },
    {
      name: "Pairing", // 30
      logo: "http://engineering.pivotal.io/images/pairing_ds_logo.png",
      link: "https://en.wikipedia.org/wiki/Pair_programming"
    },
    {
      name: "Mobbing", // 31
      logo: "data:image/jpeg;base64,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",
      link: "https://en.wikipedia.org/wiki/Mob_programming"
    },
    {
      name: "CodeIgniter", // 32
      logo: "https://cdn1.iconfinder.com/data/icons/logos-3/304/codeigniter-icon-512.png",
      link: "https://www.codeigniter.com/user_guide/general/welcome.html"
    },
    {
      name: "", // 33
      logo: "",
      link: ""
    },
  ],
}

export default content;
