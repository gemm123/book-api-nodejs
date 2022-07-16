const Book = require('../models/book')

exports.getAllBook = async (req, res) => {
    const book = await Book.find()
    res.status(200).json(book)
}

exports.getBookByTitle = async (req, res) => {
    const book = await Book.findOne({title: req.params.title})
    res.status(200).json(book)
}

exports.postBook = async (req, res) => {
    const newBook = new Book(req.body)
    const savedBook = await newBook.save()
    res.status(200).json({msg: "success create book", data: savedBook})
}

exports.updateBook = async(req, res) => {
    const filter = {name: req.params.title}
    const update = {title: req.body.title, description: req.body.description}
    const newBook = await Book.findOneAndUpdate(filter, update)
    res.status(200).json({msg: "success update book"})
}

exports.deleteBook = async (req, res) => {
    const result = await Book.deleteOne({title: req.params.title})
    res.status(200).json({msg: "success delete book"})
}