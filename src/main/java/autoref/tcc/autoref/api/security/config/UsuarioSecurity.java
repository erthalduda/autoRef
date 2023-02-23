package autoref.tcc.autoref.api.security.config;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import autoref.tcc.autoref.model.Usuario;


import java.util.List;

public class UsuarioSecurity implements UserDetails {

    private Integer id;
    private String email;
    private String password;
    private List<SimpleGrantedAuthority> roles;

    public UsuarioSecurity(Usuario usuario) {
        this.id = usuario.getIdUsuario();
        this.email = usuario.getEmail();
        this.password = usuario.getSenha();
        this.roles = rolesConverter(usuario);
    }

    private List<SimpleGrantedAuthority> rolesConverter(Usuario usuario) {
        return List.of(new SimpleGrantedAuthority("ROLE_BASIC"));
    }

    public Integer getId() {
        return id;
    }

    @Override
    public List<SimpleGrantedAuthority> getAuthorities() {
        return this.roles;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}