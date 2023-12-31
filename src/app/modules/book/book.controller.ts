import * as service from "./book.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

export const getAllBooks = catchAsync(async (req, res) => {
  const { data, meta } = await service.getAllBooks(req.query);
  sendResponse(res, {
    status: 200,
    meta,
    data,
    message: "All books retrieved successfully",
  });
});

export const createBook = catchAsync(async (req, res) => {
  const data = await service.createBook(req.body);
  sendResponse(res, {
    status: 200,
    data,
    message: "Book added successfully",
  });
});

export const updateBook = catchAsync(async (req, res) => {
  const data = await service.updateBook(req.params.id, req.body);
  sendResponse(res, {
    status: 200,
    data,
    message: "Book updated successfully",
  });
});

export const deleteBook = catchAsync(async (req, res) => {
  const data = await service.deleteBook(req.params.id);
  sendResponse(res, {
    status: 200,
    data,
    message: "Book deleted successfully",
  });
});

export const getSingleBook = catchAsync(async (req, res) => {
  const data = await service.getSingleBook(req.params.id);
  sendResponse(res, {
    status: 200,
    data,
    message: "Book data retrieved successfully",
  });
});

export const getBooksByCategoryId = catchAsync(async (req, res) => {
  req.query.category = req.params.categoryId;
  const { data, meta } = await service.getAllBooks(req.query);
  sendResponse(res, {
    status: 200,
    meta,
    data,
    message: "Books data retrieved successfully",
  });
});
