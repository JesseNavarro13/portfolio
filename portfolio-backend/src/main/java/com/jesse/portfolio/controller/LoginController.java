package com.jesse.portfolio.controller;

import com.jesse.portfolio.dto.LoginRequest;
import com.jesse.portfolio.security.JwtUtil;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

    private final JwtUtil jwtUtil;

    public LoginController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        if ("admin".equals(request.getUsername()) && "adminpassword".equals(request.getPassword())) {
            String token = jwtUtil.generateToken(request.getUsername());
            return new LoginResponse(token);
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }

    // DTO for login response
    public static class LoginResponse {
        private String token;

        public LoginResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }

}
