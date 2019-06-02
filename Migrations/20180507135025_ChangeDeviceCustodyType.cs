using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Challenge202.TestDeviceBooking.Migrations
{
    public partial class ChangeDeviceCustodyType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CustodyOfId",
                table: "Devices",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Devices_CustodyOfId",
                table: "Devices",
                column: "CustodyOfId");

            migrationBuilder.AddForeignKey(
                name: "FK_Devices_AspNetUsers_CustodyOfId",
                table: "Devices",
                column: "CustodyOfId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Devices_AspNetUsers_CustodyOfId",
                table: "Devices");

            migrationBuilder.DropIndex(
                name: "IX_Devices_CustodyOfId",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "CustodyOfId",
                table: "Devices");
        }
    }
}
