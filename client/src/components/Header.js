import React from 'react';

function Header() {
  return (
    <div>
      <p>Welcome to Our Lego Inventory!</p>
      <img src='/Everyone_Is_Awesome.jpg' alt='Everyone is Awesome!'></img>
    </div>
  );
}

export default Header;


// //import React from 'react';

// function Header() {
//   const headerStyle = {
//     backgroundColor: '#333',
//     color: '#fff',
//     padding: '10px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   };

//   const logoStyle = {
//     width: '100px', // Adjust the width as needed
//   };

//   return (
//     <header style={headerStyle}>
//       <div className="logo">
//         <img src="/logo.png" alt="Logo" style={logoStyle} />
//       </div>
//       <div className="welcome">
//         <p>Welcome to Your App Name</p>
//       </div>
//     </header>
//   );
// }

// export default Header;