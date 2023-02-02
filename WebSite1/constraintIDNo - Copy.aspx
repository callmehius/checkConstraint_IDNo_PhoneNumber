<%@ Page Language="C#" AutoEventWireup="true" CodeFile="constraintIDNo - Copy.aspx.cs" Inherits="constraintIDNo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>test</title>
</head>
<body>
    
    <form id="form1" runat="server">
        <div>
            <table>
                <tr>
                    <td>Vui lòng nhập căn cước công dân:
                    <asp:TextBox ID="TextBox1" runat="server" ></asp:TextBox>
                        <asp:Label ID="Label1" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>
            </table>


        </div>
        <p>
            <asp:Button ID="Button1" runat="server" Text="Button"  OnClientClick="return myFunction();"/>
        </p>
    </form>
</body>
</html>
