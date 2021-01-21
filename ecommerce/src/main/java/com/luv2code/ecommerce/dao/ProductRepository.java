package com.luv2code.ecommerce.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.luv2code.ecommerce.enitty.Product;

@CrossOrigin
public interface ProductRepository extends JpaRepository<Product, Long>{
	Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pagable);
    Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pagable);
}
