import { render, screen } from '@testing-library/react';
import {BrowserRouter, Route} from "react-router-dom"
import {store} from "../../../store/store"

import {Provider} from 'react-redux'

import Post from '../Post';

// it('renders learn react link', () => {
//   render(<Provider store={store}><Post /></Provider>);
//   const linkElement = screen.getByText(/post/i);
// //   expect(linkElement).toBeInTheDocument();
// });

// it('renders learn react link', () => {
//     render(<Provider store={store}><Post /></Provider>);
//     const imgElement = screen.getByRole("img")
//     expect(imgElement).toBeInTheDocument();
//   });

// it('renders learn react link', () => {
//     render(<Provider store={store}><Post title={'my title'}/></Provider>);
//     const imgElement = screen.getByText("my title")
//     expect(imgElement).toBeInTheDocument();
//   });


// it('renders learn react link', () => {
//     render(<Provider store={store}><Post /></Provider>);
//     const imgElement = screen.getByRole("img",{name: "My Header"})
//     expect(imgElement).toBeInTheDocument();
//   });

// it('renders learn react link', () => {
//     render(<Provider store={store}><Post /></Provider>);
//     const imgElement = screen.getByTitle("img")
//     expect(imgElement).toBeInTheDocument();
//   });

// data-testid="headerid"
// it('renders learn react link', () => {
//     render(<Provider store={store}><Post /></Provider>);
//     const imgElement = screen.getByTestId("headerid")
//     expect(imgElement).toBeInTheDocument();
//   });

// it('renders learn react link',async () => {
//     render(<Provider store={store}><Post /></Provider>);
//     const imgElement = await screen.findByText(/headerid/i)
//     expect(imgElement).toBeInTheDocument();
//   });

// it('renders learn react link',async () => {
//     render(<Provider store={store}><Post /></Provider>);
//     const imgElement = screen.queryByText(/dog/i)
//     expect(imgElement).not.toBeInTheDocument();
//   });

// it('renders learn react link',async () => {
//     render(<Provider store={store}><Post /></Provider>);
//     const spinnerElements = screen.getAllByRole("img")
//     expect(spinnerElements).toBe(1)
//   });

// it('renders learn react link',async () => {
//         let posts={
//             status:'Initiated',
//             data:[]
//         }
//         render(<Provider store={store}><Post posts={posts} /></Provider>);
//         const imgElement = await screen.findByTitle("posts")
//         expect(imgElement.length).toBe(22)
//       });

it('renders learn react link',async () => {
    let posts={
        status:'Initiated',
        data:[]
    }
    render(<Provider store={store}><Post posts={posts} /></Provider>);
    const imgElement = await screen.findAllByTitle('posts')
    // console.log(imgElement);
    expect(imgElement.length).toBe(100)
  });

  it('renders learn react link',async () => {
    let posts={
        status:'Initiated',
        data:[]
    }
    render(<Provider store={store}><Post posts={posts} /></Provider>);
    const imgElement = await screen.findAllByTitle('posts')
    // console.log(imgElement);
    expect(imgElement.length).toBeLessThan(101)
  });


  it('renders learn react link',async () => {
    let posts={
        status:'Initiated',
        data:[]
    }
    render(<Provider store={store}><Post posts={posts} /></Provider>);
    const imgElement = await screen.findAllByTitle('posts')
    // console.log(imgElement);
    // expect(imgElement).toBeVisible()
     // expect(imgElement).toContainHTML("p")
        // expect(imgElement).toHaveTestContent("abcd")
    // expect(imgElement.length).should.be(100)
    //expect(sdfdf.textContent).toBe("fdfd")
        expect(imgElement.length).not.toBeFalsy()

  });