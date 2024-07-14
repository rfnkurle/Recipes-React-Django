import Carousel from 'react-bootstrap/Carousel';

function Home(){
    return(
        <div className="row">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
        src="https://www.foodandwine.com/thmb/Lh2G3zPm-veZAlK2ZJ2sPiJmdRY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pancit-FT-RECIPE0621-cce43f7fe7d24e42bba4ad9e76f90b30.jpg"
          alt="Pancit"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/58c35a0e579fb3281396b7f0/1642099958299-ATO2GLPXYL0NNX1G7HFZ/del+popolo.png?format=750w"
          alt="Pizza"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
           src="https://www.foodandwine.com/thmb/Md6oUDBPq7MGWAfYLG6XDwz9L-U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steak_chorizo_potato_kabobs_ft_060-2000-e4f0292c3cd8445aa917d8e557869729.jpg"
          alt="Kebabs"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    )
}

export default Home;