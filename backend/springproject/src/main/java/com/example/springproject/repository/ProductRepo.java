package com.example.springproject.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springproject.model.Product;

public interface ProductRepo extends JpaRepository<Product,String> {
    
}