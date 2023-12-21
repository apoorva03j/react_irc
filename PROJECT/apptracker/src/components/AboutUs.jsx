
const AboutUs = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>
          Welcome to our About Us page. We are a team of passionate individuals dedicated to providing
          high-quality services and products. 
        </p>
        <p style={styles.paragraph}>
          Our mission is to deliver exceptional value to our customers and contribute positively to the
          community.
        </p>
      </div>
    );
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '30px',
      color: '#666',
      marginBottom: '15px',
      lineHeight: '1.5',
    },
  };

  export default AboutUs;