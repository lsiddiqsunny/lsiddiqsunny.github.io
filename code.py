def showUsers(username):
    """
    Get user information from the MySQL database with the given username
    """
    # Connect to the database
    db = MySQLdb.connect(host="localhost", user="root", passwd="password", db="test")
    # Create a cursor object
    cursor = db.cursor()
    # Execute the SQL command
    cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
    # Fetch all the rows in a list of lists.
    results = cursor.fetchall()
    # Close the cursor
    cursor.close()
    # Close the database connection
    db.close()
    # Return the results
    return results
