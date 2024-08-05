//server.js


/*
app.get('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const [rows] = await pool.query('SELECT * FROM bookings WHERE id = ?', [id]);
      if (rows.length > 0) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).send('Booking not found');
      }
    } catch (error) {
      console.error('Error fetching booking:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  */