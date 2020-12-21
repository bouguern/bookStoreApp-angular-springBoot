package med.bouguern.head.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import med.bouguern.head.model.Country;

import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "countries", path ="countries")
public interface CountryRepository extends JpaRepository<Country, Long>{

}
