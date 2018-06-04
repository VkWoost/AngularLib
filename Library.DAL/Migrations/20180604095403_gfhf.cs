using Microsoft.EntityFrameworkCore.Migrations;

namespace Library.DAL.Migrations
{
    public partial class gfhf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PublicationHouseBooks",
                columns: table => new
                {
                    BookId = table.Column<int>(nullable: false),
                    PublicationHouseId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PublicationHouseBooks", x => new { x.BookId, x.PublicationHouseId });
                    table.ForeignKey(
                        name: "FK_PublicationHouseBooks_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PublicationHouseBooks_PublicationHouses_PublicationHouseId",
                        column: x => x.PublicationHouseId,
                        principalTable: "PublicationHouses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PublicationHouseBooks_PublicationHouseId",
                table: "PublicationHouseBooks",
                column: "PublicationHouseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PublicationHouseBooks");
        }
    }
}
