import movieModel from "../Models/MovieModel.js";

// ADD MOVIE

export const addMovie = async (req, res) => {
    try {
        const { title, genre, description, duration } = req.body;
        const image = req.file.filename;
        const movie = new movieModel({ title, genre, description, duration, image });
        const response = await movie.save();
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json(error);
        console.log(error);
      }
}

//GET ALL MOVIES

export const getAllMovie = async(req,res)=>{
    try {
        const allMovies =await movieModel.find()
        res.status(200).json(allMovies)

    } catch (error) {
        res.status(500).json(error)
        console.log(error)       
    }
}

// GET A SINGLE MOVIE

export const getAMovie = async(req,res)=>{
    try {
        const { id } = req.params;
        const movie = await movieModel.findById(id)
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)    
    }
}

// UPDATE MOVIE

export const updateAMovie = async(req,res)=>{
    try {
        const { id } = req.params;
        const { title, genre, description, duration, image } = req.body;
        const updatedMovie = await movieModel.findByIdAndUpdate(id, { title, genre, description, duration, image }, { new: true })
        res.status(200).json(updatedMovie)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)    
    }
}

// DELETE MOVIE

export const deleteAMovie = async(req,res)=>{
    try {
        const {id} =req.params
        const movie =  await movieModel.findByIdAndDelete(id);
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)    
    }
}