# DynamicTable
Dynamic table component in React js

# How to use
1.Import this component into your component.
2.Pass header and body JSON data as a props.
3.Example of props data 
const head = [
    {
        "id" : "unique_column_one",
        "label": "column label one",
        "align": "left"
    },
    {
        "id" : "unique_column_two",
        "label": "column label two",
        "align": "center"
    },
    {
        "id" : "unique_column_three",
        "label": "column label three",
        "align": "right"
    },
    {
      "id" : "unique_column_four",
      "label": "column label four",
      "align": "right"
  }
]

const body = [
  {
      "unique_column_one" : "First row value one",
      "unique_column_two" : "First row value two",
      "unique_column_three" : "First row value three",
      "unique_column_four" : "First row value four"
  },
  {
      "unique_column_one" : "Second row value one",
      "unique_column_two" : "Second row value two",
      "unique_column_three" : "Second row value three",
      "unique_column_four" : "Second row value four"
  },
  {
      "unique_column_one" : "Third row value one",
      "unique_column_two" : "Third row value two",
      "unique_column_three" : "Third row value three",
      "unique_column_four" : "Third row value four"
  },
  {
      "unique_column_one" : "Fourth row value one",
      "unique_column_two" : "Fourth row value two",
      "unique_column_three" : "Fourth row value three",
      "unique_column_four" : "Fourth row value four"
  }
]

4.head.id === body.objectKey.
5.Tailwind css is used for styling.
6.img