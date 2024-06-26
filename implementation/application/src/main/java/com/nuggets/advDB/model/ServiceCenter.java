package com.nuggets.advDB.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "service_center", schema = "carservicecenter", indexes = {
        @Index(name = "M_SSN", columnList = "M_SSN")
})
public class ServiceCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Center_ID", columnDefinition = "int UNSIGNED not null")
    private Long id;

    @Column(name = "NO_of_Employees", columnDefinition = "int UNSIGNED")
    private Long noOfEmployees = 0L;

    @Size(max = 20)
    @NotNull
    @Column(name = "City", nullable = false, length = 20)
    private String city;

    @Column(name = "Street_NO", columnDefinition = "smallint UNSIGNED not null")
    private Integer streetNo;

    @Column(name = "Building_NO", columnDefinition = "int UNSIGNED not null")
    private Long buildingNo;

    @Size(max = 20)
    @NotNull
    @Column(name = "District", nullable = false, length = 20)
    private String district;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "M_SSN", nullable = false)
    private Employee manager;

    @OneToMany(mappedBy = "center")
    private Set<Employee> employees = new LinkedHashSet<>();

    @OneToMany(mappedBy = "center")
    private Set<MaintenanceTask> maintenanceTasks = new LinkedHashSet<>();

    public ServiceCenter(String city, Integer streetNo, Long buildingNo, String district, Employee manager) {
        this.city = city;
        this.streetNo = streetNo;
        this.buildingNo = buildingNo;
        this.district = district;
        this.manager = manager;
    }
}