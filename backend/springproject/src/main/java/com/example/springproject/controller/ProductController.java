package com.example.springproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springproject.model.Product;
import com.example.springproject.service.ProductService;;

@RestController
public class ProductController {
    @Autowired
    ProductService ps;
    @PostMapping("/product/post")
    public ResponseEntity<Product> add11(@RequestBody Product ll){
        Product log=ps.create(ll);
        return new ResponseEntity<>(log,HttpStatus.CREATED);
    }
    @GetMapping("/product/get")
    public ResponseEntity<List<Product>>show11(){
        List<Product>obj=ps.getdetails();
        return new ResponseEntity<>(obj,HttpStatus.OK);


    }
    @PutMapping("/api/Product/{productname}")
    public ResponseEntity<Product> putMethodName11(@PathVariable("productname") String productname, @RequestBody Product P) {
        if(ps.updateDetails(productname,P) == true)
        {
            return new ResponseEntity<>(P,HttpStatus.OK);
        }
        
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    
@DeleteMapping("/api/Product/{productname}")
    public ResponseEntity<Boolean> delete11(@PathVariable("productname") String productname)
    {
        if(ps.deleteproductname(productname) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}
