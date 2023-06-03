// Middleware for checking user role and redirecting to the appropriate page

      
      // Middleware for protecting the Manufacturer page
      const protectManufacturerPage = (req, res, next) => { 
        const { role } = req.user;
      
        if (role === 'Manufacturer') {
          // User is a Manufacturer, allow access to the Manufacturer page
          next();
        } else {
          // User is not a Manufacturer, redirect to login or show an error page
          res.redirect('/login');
        }
      };
      
      // Middleware for protecting the Transporter page
      const protectTransporterPage = (req, res, next) => {
        const { role } = req.user;
      
        if (role === 'Transporter') {
          // User is a Transporter, allow access to the Transporter page
          next();
        } else {
          // User is not a Transporter, redirect to login or show an error page
          res.redirect('/login');
        }
      };
      