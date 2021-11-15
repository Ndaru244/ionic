<form action="insert_new_memory.php" method="POST" enctype="multipart/form-data">
    <table>
        <tr>
            <th colspan="2">Tambah Data memory</th>
        </tr>
        <tr>
            <td>id_memory</td>
            <td><input type="text" name="id_memory"></td>
        </tr>
        <tr>
            <td>title_memory</td>
            <td><input type="text" name="title_memory"></td>
        </tr>
        <tr>
            <td>type_memory</td>
            <td><input type="text" name="type_memory"></td>
        </tr>
        <tr>
            <td>lat_location</td>
            <td><input type="text" name="lat_location"></td>
        </tr>
        <tr>
            <td>lng_location</td>
            <td><input type="text" name="lng_location"></td>
        </tr>
        <tr>
            <td>image_memory</td>
            <td><input type="file" name="image_memory"></td>
        </tr>
        <tr>
            <td colspan="2"><input type="submit" name="submit" value="submit"></td>
        </tr>
    </table>
</form>