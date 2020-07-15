import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,    //처음엔 로딩 상태
    movies: [],
  };

  getMovies = async () =>{
    const{
      data:{
        data:{ movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating') 
    //구조분해 할당 해줬음
    this.setState({ movies: movies, isLoading: false });
    //console.log(movies.data.data.movies) -> 구조분해할당 해주는게 좋음
  } //async: 함수가 비동기라서 시간이 필요함을 알림   await: 기다려 달라고 말함.

  componentDidMount() {
    //영화 데이터 로딩
    /*
    axios.get('https://yts.mx/api/v2/list_movies.json') 
    axios는 네트워크를 사용하기 때문에 매우 느림. 
    -> axios.get() 실행끝날 때까지 시간 걸릴 수 있음을 JS에 말해야함
    anxios.get()분리*/
    this.getMovies();
  }

  render() {
    const{ isLoading, movies } = this.state;    //구조분해 할당
    return (
    <section class="container">
      {isLoading ? (
        <div class="loader">
          <span class="loader__text">Loading...</span>
        </div>
       )
        : (
          <div class="movies">
          {movies.map((movie) => {
          return( 
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          );
        })}
        </div>
      )}
    </section>
    );
  }
   
}

export default App;
