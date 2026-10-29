import React, { useState } from 'react'
import './bootstrap.min.css'

const Projects = [
  { id: 1, name: 'Wireless Mouse', category: 'Electronics' },
  { id: 2, name: 'Leather Jacket', category: 'Clothing' },
  { id: 3, name: 'Running Shoes', category: 'Clothing' },
  { id: 4, name: 'Mechanical Keyboard', category: 'Electronics' },
  { id: 5, name: 'Coffee Mug', category: 'Kitchen' },
];

function Filter ()  {

     // 2. Track the selected filter option in state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 3. Derived State: Compute the filtered list on every render
  const filteredProducts = Projects.filter((product) => {
    if (selectedCategory === 'All') return true;
    return product.category === selectedCategory;
  });

  return (
    <section className='filter-form-bg'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-12'>
                    <h2>Our Projects</h2>
                </div>
                <div className='col-md-8 col-12'>
                    <div className='float-end'>
                        {['All', 'Electronics', 'Clothing', 'Kitchen'].map((category) => (<button className='tab-btn'  key={category} onClick={() => setSelectedCategory(category)} > {category}</button>))}
                    </div>    
                </div>
               
                    <div className='project-box'>
                    
                 <ul>
                {filteredProducts.map((product) => (
                <li key={product.id}>
                    <strong>{product.name}</strong>
                    <span style={{ color: '#666', fontSize: '0.9em' }}>{product.category}</span>
                </li>
                ))}
            </ul>
                    </div>
                </div>    
           
           
            {filteredProducts.length === 0 && <p>No products found.</p>}
        </div>
    </section>
  )
}

export default Filter
