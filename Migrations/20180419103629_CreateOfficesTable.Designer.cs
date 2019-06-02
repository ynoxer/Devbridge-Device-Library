﻿// <auto-generated />
using Challenge202.TestDeviceBooking.Data;
using Challenge202.TestDeviceBooking.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Challenge202.TestDeviceBooking.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20180419103629_CreateOfficesTable")]
    partial class CreateOfficesTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Challenge202.TestDeviceBooking.Models.Device", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Group");

                    b.Property<string>("Name");

                    b.Property<string>("OperatingSystem");

                    b.Property<DateTime>("PurchasedOn");

                    b.Property<string>("SerialNumber");

                    b.Property<int>("Status");

                    b.Property<string>("Subgroup");

                    b.Property<string>("Vendor");

                    b.HasKey("Id");

                    b.ToTable("Devices");
                });

            modelBuilder.Entity("Challenge202.TestDeviceBooking.Models.Office", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.HasKey("Id");

                    b.ToTable("Offices");
                });
#pragma warning restore 612, 618
        }
    }
}
