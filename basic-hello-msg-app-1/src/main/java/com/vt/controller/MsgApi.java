package com.vt.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MsgApi {
	@GetMapping("/msg")
	public String getMsg() {
		return "Hello !";
	}
}
