package com.capstone.winfo.security;

import com.capstone.winfo.domain.User;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Slf4j
public class JwtTokenProvider {

    @Autowired
    private SecurityConstants securityConstants;

    public String generateToken(Authentication authentication){
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + securityConstants.EXPIRATION_TIME);

        return Jwts.builder()
                .setSubject(Long.toString(userPrincipal.getId()))
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, securityConstants.SECRET)
                .compact();
    }

    public Long getUserIdFromJWT(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(securityConstants.SECRET)
                .parseClaimsJws(token)
                .getBody();
        return Long.parseLong(claims.getSubject());
    }

    public boolean validateToken(String authToken){
        try{
            Jwts.parser().setSigningKey(securityConstants.SECRET).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException ex){
            log.error("Invalid JWT Signature");
        } catch (MalformedJwtException ex){
            log.error("Invalid JWT Token");
        } catch (ExpiredJwtException ex){
            log.error("Expired JWT Token");
        } catch (UnsupportedJwtException ex){
            log.error("Unsupported JWT Token");
        } catch (IllegalArgumentException ex){
            log.error("JWT claims string is empty");
        }

        return false;
    }
}