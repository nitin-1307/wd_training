function App(){
    return 
        <>
        <button>
          <Link to='/a'>A</Link>
        </button>
        <button>
          <Link to='/b'>B</Link>
        </button>
        <button>
          <Link to='/c'>C</Link><h1></h1>
          </button>    
        

        <Routes>
          <Route exact path="/a" element={<A />} />
          <Route exact path="/b" element={<B />} />
          <Route exact path="/c" element={<C />} />
        </Routes>
        </>
}
    

export default App;