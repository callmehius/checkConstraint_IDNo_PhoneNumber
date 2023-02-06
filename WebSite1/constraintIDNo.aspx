<%@ Page Language="C#" AutoEventWireup="true" CodeFile="constraintIDNo.aspx.cs" Inherits="constraintIDNo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>test</title>
    <script type = "text/javascript" src="Scripts/CustomJSFile/checkConstraints.js"></script>
</head>
<body>
    
    <form id="form1" runat="server">
        <div>
            <table>
                <tr>
                    <td>Vui lòng nhập căn cước công dân:
                    <asp:TextBox ID="idNoTextBox" runat="server" ></asp:TextBox>
                        <asp:Label ID="alertLableIdNo" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td>Vui lòng nhập số điện thoại:
                    <asp:TextBox ID="phoneNumberTextBox" runat="server" ></asp:TextBox>
                        <asp:Label ID="alertPhoneNumber" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>
            </table>


        </div>
        <p>
            <asp:Button ID="btnSubmitForm" runat="server" Text="Button"  OnClientClick="return checkConstraintsFunction();"/>
        </p>
    </form>
</body>
</html>
